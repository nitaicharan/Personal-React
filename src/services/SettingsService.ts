import { SettingsState } from "../reducers/SettingsReducer";
import { api } from "./axiosConfig";

export const update = (params: { user: SettingsState, token: string }) => api.put<{ user: SettingsState }>('/user', params.user, {
    headers: { Authorization: params.token ? `Token ${params.token}` : '' }
});
