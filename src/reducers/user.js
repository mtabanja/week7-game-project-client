import { JWT } from "../actions";

export default function(state = "", action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload;
    default:
      return state;
  }
}
