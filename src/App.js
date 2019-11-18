import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormContainer from "./Components/LoginFormContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={LoginFormContainer} exact />
    </Provider>
  );
}

export default App;
