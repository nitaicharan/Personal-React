import { AnyAction, Reducer } from "redux";
import { SignInConstants } from "../constants/SignInConstants";

export type SignInState = {
    email: string;
    password: string;
    [key: string]: any;
}

const reducer: Reducer<SignInState, AnyAction> = (state = {} as SignInState, action: AnyAction): SignInState => {
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

export default reducer;