import React from "react";
import { loadQuiz } from "../actions";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import superagent from "superagent";
import { Url } from "../constants";

class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuiz();
  }

  give = async answerId => {
    //do we need to pass the jwt in the argument?
    console.log("onclick clicked");
    const what = this.props.quiz.map(question => {
      const currentAnswer = question.answers.find(
        answer => answer.id === answerId
      );
      return currentAnswer;
    });
    const checkTrue = what.find(answer => answer);
    console.log("checktrue is:", checkTrue);
    if (checkTrue.correct === "true") {
      const url = `${Url}/points`;
      const response = await superagent.put(url).set({
        authorization: `Bearer ${this.props.jwt}`
      });
      console.log("IGNORE IT:", response);
    }
  };

  render() {
    return (
      <div className="quizlist">
        <Quiz
          quiz={this.props.quiz}
          give={this.give}
          points={this.props.points}
          rooms={this.props.rooms}
        />
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
