import { Dispatch } from "react";
import { AnyAction } from "redux";
import { settingsAction, settingsSuccessAction } from "../actions/SettingsActions";
import { signUpAction } from "../actions/SignUpActions";
import { SignUpState } from "../reducers/SignUpReducer";
import { signUp } from "../services/SignUpService";
import { signUpFailureAction, signUpSuccessAction } from './../actions/SignUpActions';

export const signUpThunk = (payload: SignUpState) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(signUpAction(payload));

        signUp(payload)
            .then(res => dispatch(settingsAction(res.data.user)))
            .then(() => dispatch(settingsSuccessAction()))
            .then(() => dispatch(signUpSuccessAction()))
            .catch(() => dispatch(signUpFailureAction()))
    }
}