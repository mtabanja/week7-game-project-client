import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpFormContainer from "./SignUpFormContainer";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>SIGN UP TO ENTER THE GAME LOBBY</h1>
        <div>
          <SignUpFormContainer />
        </div>

        <div>
          {" "}
          <p>Already Have An Account</p>
          <Link to={"/signin"}>SIGN IN</Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
  //   signup: state.signup
});

export default connect(mapStateToProps)(HomePage);
