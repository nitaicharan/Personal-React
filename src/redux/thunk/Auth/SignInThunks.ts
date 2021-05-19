import { Dispatch } from "redux";
import { login } from "../../../services/Auth/SignInService";
import { signInAction, signInSuccessAction } from "../../actions/Auth/SignInActions";
import { SignInState } from "../../reducers/Auth/SignInReducer";

export const signIn = (payload: SignInState) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(signInAction(payload));

        login(payload)
            .then(res => dispatch(signInSuccessAction(res.data)))
            .catch(e => console.log(e.response));
    };
};