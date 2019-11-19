import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormContainer from "./Components/LoginFormContainer";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <Provider store={store}>
      <Route path="/signin" component={LoginFormContainer} exact />
      <Route path="/" component={HomePage} exact />
      <Route path="/rooms" component={Rooms} exact />
    </Provider>
  );
}

export default App;
