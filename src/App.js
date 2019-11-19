import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormContainer from "./Components/LoginFormContainer";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Room from "./Components/Room";

function App() {
  return (
    <Provider store={store}>
      <Route path="/signin" component={LoginFormContainer} exact />
      <Route path="/" component={HomePage} exact />
      <Route path="/room/:name" component={Room} exact />
    </Provider>
  );
}

export default App;
