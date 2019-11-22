import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { Link } from "react-router-dom";

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
    return (
      <div>
        {!this.props.user ? (
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        ) : (
          <div className="go-to-room-container">
            <div
              style={{
                display: "table",
                margin: "auto",
                marginTop: 50,
                marginBottom: 50
              }}
            >
              GO TO ROOMS AND SELECT A ROOM TO START PLAYING
            </div>

            <div
              style={{
                display: "table",
                margin: "auto"
              }}
              className="div-btn"
            >
              <Link className="link" to={"/rooms"}>
                Go to rooms
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  //   signup: state.signup
});

export default connect(mapStateToProps, { login })(LoginFormContainer);
