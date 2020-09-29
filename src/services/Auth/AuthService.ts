import { api } from "../api";

type Login = {
    email: string;
    password: string;
}

export const login = (user: Login) => api.post('/users/login', { user });
