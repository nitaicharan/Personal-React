import { AnyAction } from "redux";
import { SignUpConstants } from "../../constants/Auth/SignUpConstants";
import { SignUpState } from "../../reducers/Auth/SignUpReducer";

export const signUpAction = (payload: SignUpState): AnyAction => ({
    type: SignUpConstants.SIGN_UP,
    payload,
});