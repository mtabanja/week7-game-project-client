import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormContainer from "./Components/LoginFormContainer";

function App() {
  return (
    <Provider store={store}>
      <LoginFormContainer />
    </Provider>
  );
}

export default App;
