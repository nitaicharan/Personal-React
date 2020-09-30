import { SignUpState } from "../../redux/reducers/Auth/SignUpReducer";
import { api } from "../api";


export const signUp = (user: SignUpState) => api.post('/users', { user });
