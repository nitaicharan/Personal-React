import { AnyAction } from "redux";
import { HomeConstants } from "../constants/HomeConstants";

export const homeAction = (payload: any): AnyAction => ({
    type: HomeConstants.HOME,
    payload,
});

export const homeSuccessAction = (): AnyAction => ({
    type: HomeConstants.HOME_SUCCESS,
});

export const homeFailureAction = (): AnyAction => ({
    type: HomeConstants.HOME_FAILURE,
});