import { ProfileState } from '../reducers/ProfileReducer';
import { api } from './axiosConfig';

export const fetchProfile = (username: string) => api.get<{ profile: ProfileState }>(`/profiles/${username}`);