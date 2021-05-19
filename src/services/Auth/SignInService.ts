import { SignInState } from "../../redux/reducers/Auth/SignInReducer";
import { api } from "../api";

export const login = (user: SignInState) => api.post('/users/login', { user });
