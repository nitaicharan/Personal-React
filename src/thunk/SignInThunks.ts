import { AnyAction, Dispatch } from "redux";
import { settingsAction, settingsSuccessAction } from "../actions/SettingsActions";
import { signInAction, signInSuccessAction } from "../actions/SignInActions";
import { SignInState } from "../reducers/SignInReducer";
import { signIn } from "../services/SignInService";
import { settingsFailureAction } from './../actions/SettingsActions';

export const signInThunk = (payload: SignInState) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(signInAction(payload));

        signIn(payload)
            .then(({ data }) => dispatch(settingsAction(data.user)))
            .then(() => dispatch(signInSuccessAction()))
            .then(() => dispatch(settingsSuccessAction()))
            .catch(e => dispatch(settingsFailureAction()));
    };
};