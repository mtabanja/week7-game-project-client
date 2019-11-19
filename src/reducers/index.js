import { combineReducers } from "redux";
import user from "./user";
import signup from "./signup";
import rooms from "./rooms";

export default combineReducers({
  user,
  signup,
  rooms
});
