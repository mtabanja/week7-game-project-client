import React from "react";
import LoginFormContainer from "./Components/LoginFormContainer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <LoginFormContainer />
    </Provider>
  );
}

export default App;
