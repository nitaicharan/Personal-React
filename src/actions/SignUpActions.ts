import { AnyAction } from "redux";
import { SignUpConstants } from "../constants/SignUpConstants";
import { SignUpState } from "../reducers/SignUpReducer";

export const signUpAction = (payload: SignUpState): AnyAction => ({ type: SignUpConstants.SIGN_UP, payload });
export const signUpSuccessAction = (): AnyAction => ({ type: SignUpConstants.SIGN_UP_SUCCESS });
export const signUpFailureAction = (): AnyAction => ({ type: SignUpConstants.SIGN_UP_FAILURE });