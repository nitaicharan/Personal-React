import { SignInConstants } from "../constants/SignInConstants";
import { SignInState } from "../reducers/SignInReducer";

export const signInAction = (payload: SignInState) => ({ type: SignInConstants.SIGN_IN, payload });
export const signInSuccessAction = () => ({ type: SignInConstants.SIGN_IN_SUCCESS });
export const signInFailureAction = () => ({ type: SignInConstants.SIGN_IN_FAILURE });