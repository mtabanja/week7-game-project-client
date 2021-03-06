import Rooms from "./Components/Rooms";
import { connect } from "react-redux";
import Room from "./Components/Room";
import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./Components/LoginFormContainer";
import HomePage from "./Components/HomePage";
import { Url } from "./constants";
import Navbar from "./Components/Navbar";
import "./App.css";

class App extends React.Component {
  stream = new EventSource(`${Url}/stream`);
  componentDidMount = () => {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      this.props.dispatch(parsed);
    };
  };
  render() {
    return (
      <div className="app">
        <Route path="/" component={Navbar} />
        <Route path="/signin" component={LoginFormContainer} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/room/:name" component={Room} />
      </div>
    );
  }
}
export default connect()(App);
