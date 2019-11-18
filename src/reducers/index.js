import { combineReducers } from "redux";
import user from "./user";
import signup from "./signup";

export default combineReducers({
  user,
  signup
});
