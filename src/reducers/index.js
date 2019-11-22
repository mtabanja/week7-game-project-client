import { combineReducers } from "redux";
import user from "./user";
import signup from "./signup";
import rooms from "./rooms";
import quiz from "./quiz";

export default combineReducers({
  user,
  signup,
  rooms,
  quiz
});
