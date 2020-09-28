import { SingInConstants } from "../../constants/Auth"

type LoginType = {
    email: string;
    password: string;
}

export type LoginActionType = {
    type: string;
    payload: LoginType;
}

export const loginAction = (email: string, password: string): LoginActionType => {
    return {
        type: SingInConstants.LOGIN,
        payload: {
            email,
            password
        }
    };
};