import { api } from "./axiosConfig";
import { SignInState } from "../reducers/SignInReducer";
import { SettingsState } from "../reducers/SettingsReducer";

export const signIn = (user: SignInState) => api.post<{ user: SettingsState }>('/users/login', { user });
