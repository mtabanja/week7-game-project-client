import React from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { SignUp } from "../actions";

class SignUpFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.SignUp(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { SignUp })(SignUpFormContainer);
