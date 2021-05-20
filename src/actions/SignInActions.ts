import { AnyAction } from "redux";
import { SignInConstants } from "../constants/SignInConstants";
import { SignInState } from "../reducers/SignInReducer";

export const signInAction = (payload: SignInState): AnyAction => ({
    type: SignInConstants.SIGN_IN,
    payload,
});

export const signInSuccessAction = (): AnyAction => ({
    type: SignInConstants.SIGN_IN_SUCCESS,
});

export const signInFailureAction = (): AnyAction => ({
    type: SignInConstants.SIGN_IN_FAILURE,
});