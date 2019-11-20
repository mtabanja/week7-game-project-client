import React from "react";
import { loadQuiz } from "../actions/ads";
import { connect } from "react-redux";
import Quiz from "./Quiz";

class QuizContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuiz();
  }

  render() {
    return (
      <div className="quizlist">
        <Quiz />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  user: state.user
});

export default connect(mapStateToProps, { loadQuiz })(QuizContainer);
