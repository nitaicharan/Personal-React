import { settingsSuccessAction } from "../actions/SettingsActions";
import { signInAction, signInSuccessAction } from "../actions/SignInActions";
import { SignInState } from "../reducers/SignInReducer";
import { signIn } from "../services/SignInService";
import { settingsFailureAction } from './../actions/SettingsActions';
import { settingsThunk } from "./SettingsThunks";

export const signInThunk = (payload: SignInState) => {
    return (dispatch: any) => {
        dispatch(signInAction(payload));

        signIn(payload)
            .then(({ data }) => dispatch(settingsThunk(data.user)))
            .then(() => dispatch(signInSuccessAction()))
            .then(() => dispatch(settingsSuccessAction()))
            .catch(e => dispatch(settingsFailureAction()));
    };
};