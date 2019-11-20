import { QUIZ_FETCHED } from "../actions";

export default function(state = "", action = {}) {
  switch (action.type) {
    case QUIZ_FETCHED:
      return action.questions;
    default:
      return state;
  }
}
