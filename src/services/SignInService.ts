import { SettingsState } from "../reducers/SettingsReducer";
import { SignInState } from "../reducers/SignInReducer";
import { api } from "./axiosConfig";

export const signIn = (user: SignInState) => api.post<{ user: SettingsState }>('/users/login', { user });