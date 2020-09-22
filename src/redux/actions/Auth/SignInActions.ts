import { AnyAction } from "redux";
import { SignInConstants } from "../../constants/Auth/SignInConstants";
import { SignInState } from "../../reducers/Auth/SignInReducer";

export const signInAction = (payload: SignInState): AnyAction => ({
    type: SignInConstants.SIGN_IN,
    payload,
});