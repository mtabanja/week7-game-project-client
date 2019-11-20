import React from "react";
import { loadQuiz } from "../actions";
import { connect } from "react-redux";
import Quiz from "./Quiz";

class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuiz();
  }

  render() {
    return (
      <div className="quizlist">
        <Quiz quiz={this.props.quiz} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(mapStateToProps, { loadQuiz })(QuizContainer);
