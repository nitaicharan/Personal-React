import { SingInConstants } from "../../constants/Auth"

type LoginType = {
    email: string;
    password: string;
}

export type LoginActionType = {
    type: string;
    data: LoginType;
}

export const loginAction = (email: string, password: string): LoginActionType => {
    return {
        type: SingInConstants.LOGIN,
        data: {
            email,
            password
        }
    };
};