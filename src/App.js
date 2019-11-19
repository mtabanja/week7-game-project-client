import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormContainer from "./Components/LoginFormContainer";
import { Route } from "react-router-dom";
import Rooms from "./Components/Rooms";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Route path="/signin" component={LoginFormContainer} exact />
      <Route path="/" component={HomePage} exact />
      <Route path="/" component={Rooms} />
    </Provider>
  );
}

export default App;
