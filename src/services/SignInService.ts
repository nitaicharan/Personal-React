import { SignInState } from "../reducers/SignInReducer";
import api from ".";

export const login = (user: SignInState) => api.post('/users/login', { user });
