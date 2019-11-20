import request from "superagent";
import { Url } from "./constants";

export const JWT = "JWT";

function userLogin(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  console.log("actions", email, password);

  request
    .post(`${Url}/login`)
    .send({ email, password })
    .then(response => {
      const action = userLogin(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};

export const SIGN_UP = "SIGN_UP";

function userSignUp(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const SignUp = (email, password) => dispatch => {
  console.log("action", email, password);

  request
    .post(`${Url}/user`)
    .send({ email, password })
    .then(response => {
      const action = userSignUp(response.body);
      console.log("response", response.body);

      dispatch(action);
    })
    .catch(console.error);
};

// export const FETCH_DATA = "FETCH_DATA";

// export const roomsFetched = payload => ({
//   type: FETCH_DATA,
//   payload
// });
