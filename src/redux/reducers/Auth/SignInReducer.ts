import { LoginActionType } from "../../actions/Auth/SingInActions";
import { SingInConstants } from "../../constants/Auth";

type LoginState = {
    email: string;
    password: string;
    loading: boolean;
}

const initState: LoginState = {
    email: '',
    password: '',
    loading: false,
}

export default function reducer(state = initState, action: LoginActionType): LoginState {

    switch (action.type) {
        case SingInConstants.LOGIN:
            return { ...state, ...action.payload, loading: true };

        case SingInConstants.LOGIN_SUCCESS:
            return { ...state, loading: false };;

        case SingInConstants.LOGIN_FAILURE:
            return { ...state, loading: false };;

        default:
            return state;
    }
}