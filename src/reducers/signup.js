import { SIGN_UP } from "../actions";

export default function(state = "", action = {}) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
}
