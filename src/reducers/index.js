import { counterReducer } from "./counter";
import { loggedReducer } from "./isLogged";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});
