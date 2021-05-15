import { AnyAction, Reducer } from "redux";
import { SignUpConstants } from "../constants/SignUpConstants";

export type SignUpState = {
    username: string;
    email: string;
    password: string;
    [key: string]: any;
}

const reducer: Reducer<SignUpState, AnyAction> = (state = {} as SignUpState, action: AnyAction): SignUpState => {
    switch (action.type) {
        case SignUpConstants.SIGN_UP:
            return { ...state, ...action.payload, loading: true };

        case SignUpConstants.SIGN_UP_FAILURE:
        case SignUpConstants.SIGN_UP_SUCCESS:
            return { ...state, loading: false };

        default:
            return state;
    }
}

export default reducer;