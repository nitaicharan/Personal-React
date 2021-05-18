import { api } from "./axiosConfig";
import { SignUpState } from "../reducers/SignUpReducer";

export const signUp = (user: SignUpState) => api.post('/users', { user });
