import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from "./reducers/index";

export const store = createStore(combineReducers({ ...reducers }), composeWithDevTools());