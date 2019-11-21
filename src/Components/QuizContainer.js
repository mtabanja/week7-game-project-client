import React from "react";
import { loadQuiz } from "../actions";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import superagent from "superagent";
import { Url } from "../constants";
import Results from "./Results";

class QuizContainer extends React.Component {
  state = { submitted: false };

  componentDidMount() {
    this.props.loadQuiz();
  }

  give = async answerId => {
    const what = this.props.quiz.map(question => {
      const currentAnswer = question.answers.find(
        answer => answer.id === answerId
      );
      return currentAnswer;
    });
    const checkTrue = what.find(answer => answer);
    if (checkTrue.correct === "true") {
      const url = `${Url}/points`;
      const response = await superagent.put(url).set({
        authorization: `Bearer ${this.props.jwt}`
      });
      console.log("IGNORE IT:", response);
    }
  };

  // winner = () => {

  // }

  results = () => {
    if (this.state.submitted === false) {
      this.setState({ submitted: true });
    } else {
      this.setState({ submitted: false });
    }
    console.log("what is the local state?:", this.state.submitted);
  };

  render() {
    return (
      <div className="quizlist">
        {!this.state.submitted ? (
          <Quiz
            quiz={this.props.quiz}
            give={this.give}
            points={this.props.points}
            rooms={this.props.rooms}
            results={this.results}
          />
        ) : (
          <Results currentRoom={this.props.currentRoom} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  points: state.points,
  rooms: state.rooms,
  jwt: state.user
});

export default connect(mapStateToProps, { loadQuiz })(QuizContainer);
