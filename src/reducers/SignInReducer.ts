import { AnyAction } from "redux";
import { SignInConstants } from "../constants/SignInConstants";

export type SignInState = {
    email: string;
    password: string;
    [key: string]: any;
}

const initState: SignInState = {
    email: '',
    password: '',
    loading: false,
}

export default function reducer(state = initState, action: AnyAction): SignInState {
    switch (action.type) {
        case SignInConstants.SIGN_IN:
            return { ...state, ...action.payload, loading: true };

        case SignInConstants.SIGN_IN_SUCCESS:
        case SignInConstants.SIGN_IN_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
}