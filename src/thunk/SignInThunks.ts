import { Dispatch } from "redux";
import { settingsAction, settingsSuccessAction } from "../actions/SettingsActions";
import { signInAction, signInSuccessAction } from "../actions/SignInActions";
import { SignInState } from "../reducers/SignInReducer";
import { login } from "../services/SignInService";

export const signInThunk = (payload: SignInState) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(signInAction(payload));

        login(payload)
            .then(res => dispatch(settingsAction(res.data.user)))
            .then(() => dispatch(signInSuccessAction()))
            .then(() => dispatch(settingsSuccessAction()))
            .catch(e => console.log(e.response));
    };
};