import { AnyAction } from "redux";
import { ProfileConstants } from './../constants/ProfileConstants';
import { ProfileState } from './../reducers/ProfileReducer';

export const profileAction = (payload: ProfileState): AnyAction => ({
    type: ProfileConstants.PROFILE,
    payload,
});

export const profileSuccessAction = (payload: ProfileState): AnyAction => ({
    type: ProfileConstants.PROFILE_SUCCESS,
    payload
});

export const profileFailureAction = (): AnyAction => ({
    type: ProfileConstants.PROFILE_FAILURE,
});