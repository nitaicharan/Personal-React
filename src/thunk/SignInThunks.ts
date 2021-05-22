import { settingsFailureAction } from './../actions/SettingsActions';
import { AnyAction, Dispatch } from "redux";
import { settingsAction, settingsSuccessAction } from "../actions/SettingsActions";
import { signInAction, signInSuccessAction } from "../actions/SignInActions";
import { SignInState } from "../reducers/SignInReducer";
import { signIn } from "../services/SignInService";

export const signInThunk = (payload: SignInState) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(signInAction(payload));

        signIn(payload)
            .then(res => dispatch(settingsAction(res.data.user)))
            .then(() => dispatch(settingsSuccessAction()))
            .then(() => dispatch(signInSuccessAction()))
            .catch(e => dispatch(settingsFailureAction()));
    };
};