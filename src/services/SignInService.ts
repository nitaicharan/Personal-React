import { api } from "./axiosConfig";
import { SignInState } from "../reducers/SignInReducer";

export const signIn = (user: SignInState) => api.post('/users/login', { user });
