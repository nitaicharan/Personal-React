import { combineReducers, createStore } from "redux";
import * as reducers from "./reducers/index";

export const store = createStore(combineReducers({ ...reducers }));