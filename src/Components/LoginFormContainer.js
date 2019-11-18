import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";
import SignUpFormContainer from "./SignUpFormContainer";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("props loginfrom", this.props);
    return (
      <div>
        {!this.props.user ? (
          <div>
            <SignUpFormContainer />
            <LoginForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  signup: state.signup
});

export default connect(mapStateToProps, { login })(LoginFormContainer);
