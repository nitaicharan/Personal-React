import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import * as allReducers from "./reducers";
import thunk from 'redux-thunk';

const reducers = combineReducers({ ...allReducers });
export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

export type State = ReturnType<typeof reducers>;