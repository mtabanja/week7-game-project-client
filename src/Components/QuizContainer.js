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
      await superagent.put(url).set({
        authorization: `Bearer ${this.props.jwt}`
      });
    }
  };

  winner = () => {
    const userPoints = this.props.currentRoom.users.map(user => user.points);
    const maxPoint = Math.max(...userPoints);
    const safeMax = Math.max(0, maxPoint);
    const winnerUser = this.props.currentRoom.users.find(
      user => user.points === safeMax
    );
    return winnerUser && winnerUser.email;
  };

  results = async () => {
    if (!this.state.submitted) {
      this.setState({ submitted: true });
    } else {
      this.setState({ submitted: false });
    }

    const url = `${Url}/ready`;
    await superagent.put(url).set({
      authorization: `Bearer ${this.props.jwt}`
    });
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
          <Results currentRoom={this.props.currentRoom} winner={this.winner} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  rooms: state.rooms,
  jwt: state.user
});

export default connect(mapStateToProps, { loadQuiz })(QuizContainer);
