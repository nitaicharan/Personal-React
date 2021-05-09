import { combineReducers, createStore } from "redux";
import * as reducers from "./redux/reducers/index";

export const store = createStore(combineReducers({ ...reducers }));