import { api } from "./axiosConfig";
import { SignInState } from "../reducers/SignInReducer";

export const login = (user: SignInState) => api.post('/users/login', { user });
