import { SignUpState } from "../reducers/SignUpReducer";
import api from ".";

export const signUp = (user: SignUpState) => api.post('/users', { user });
