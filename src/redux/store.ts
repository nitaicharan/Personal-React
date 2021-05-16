import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from "./reducers/index";
import thunk from 'redux-thunk';

export const store = createStore(
    combineReducers({ ...reducers }),
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);