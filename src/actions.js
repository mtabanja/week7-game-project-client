import request from "superagent";

const baseUrl = "http://localhost:4000";

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
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = userLogin(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
