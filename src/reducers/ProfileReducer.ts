import { ProfileConstants } from '../constants/ProfileConstants';
import { AnyAction, Reducer } from "redux";

export interface ProfileState {
    username?: string;
    bio?: string;
    image?: string;
    following?: boolean;
    login?: boolean;
}

const reducer: Reducer<ProfileState, AnyAction> = (state = {} as ProfileState, action: AnyAction): ProfileState => {
    switch (action.type) {
        case ProfileConstants.PROFILE:
            return { ...state, ...action.payload, login: true };
        case ProfileConstants.PROFILE_SUCCESS:
            return { ...state, ...action.payload, login: false };
        case ProfileConstants.PROFILE_FAILURE:
            return { ...state, login: false };
        default:
            return state;
    }
};

export default reducer;