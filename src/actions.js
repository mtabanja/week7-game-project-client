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
  request
    .post(`${Url}/user`)
    .send({ email, password })
    .then(response => {
      const action = userSignUp(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// export const FETCH_DATA = "FETCH_DATA";

// export const roomsFetched = payload => ({
//   type: FETCH_DATA,
//   payload
// });

// fetching for displaying all the quiz
export const QUIZ_FETCHED = "QUIZ_FETCHED";

const quizFetched = questions => ({
  type: QUIZ_FETCHED,
  questions
});

export const loadQuiz = () => (dispatch, getState) => {
  // when the state already contains ads, we don't fetch them again
  if (getState().quiz) return;

  // a GET /ads request
  request(`${Url}/questions`)
    .then(response => {
      // dispatch an ADS_FETCHED action that contains the ads
      dispatch(quizFetched(response.body));
    })
    .catch(console.error);
};

// // adding 1 point
// export const ADD_POINT = "ADD_POINT";

// const addPointSuccess = newData => ({
//   type: ADD_POINT,
//   newData
// });

// export const addPoint = jwt => dispatch => {
//   request
//     .put(`${Url}/points`)
//     .set({ authorization: `Bearer ${jwt}` })
//     // .send(values)
//     .then(response => {
//       dispatch(addPointSuccess(response.body));
//       // dispatch(loadAd(id));
//     })
//     .catch(console.error);
// };
