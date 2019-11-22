import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpFormContainer from "./SignUpFormContainer";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const styling = { display: "table", margin: "auto", marginTop: 20 };
    return (
      <div>
        <h1 style={styling}>SIGN UP TO ENTER THE LOBBY</h1>
        <div>
          <SignUpFormContainer />
        </div>

        <div>
          {" "}
          <p style={styling}> Already Have An Account?</p>
          <Link to={"/signin"} style={styling}>
            SIGN IN
          </Link>
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
