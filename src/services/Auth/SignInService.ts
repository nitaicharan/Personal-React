import { api } from "../api";

type SignIn = {
    email: string;
    password: string;
}

export const signIn = (user: SignIn) => api.post('/users/signin', { user });
