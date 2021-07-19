import { settingsSuccessAction } from "../actions/SettingsActions";
import { signUpAction } from "../actions/SignUpActions";
import { SignUpState } from "../reducers/SignUpReducer";
import { signUp } from "../services/SignUpService";
import { signUpFailureAction, signUpSuccessAction } from './../actions/SignUpActions';
import { settingsThunk } from "./SettingsThunks";

export const signUpThunk = (payload: SignUpState) => {
    return (dispatch: any) => {
        dispatch(signUpAction(payload));

        signUp(payload)
            .then(res => dispatch(settingsThunk(res.data.user)))
            .then(() => dispatch(settingsSuccessAction()))
            .then(() => dispatch(signUpSuccessAction()))
            .catch(() => dispatch(signUpFailureAction()))
    }
}