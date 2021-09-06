import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as allReducers from "./reducers";

const reducers = combineReducers({ ...allReducers });
export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

export type State = ReturnType<typeof reducers>;