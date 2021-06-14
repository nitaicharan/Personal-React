import { AnyAction } from "redux";
import { PostNewConstants } from "../constants/PostNewConstants";
import { PostNewState } from "../reducers/PostNewReducer";

export const postNewAction = (payload: PostNewState): AnyAction => ({
    type: PostNewConstants.POSTNEW,
    payload,
});

export const postNewSuccessAction = (payload: any): AnyAction => ({
    type: PostNewConstants.POSTNEW_SUCCESS,
    payload
});

export const postNewFailureAction = (): AnyAction => ({
    type: PostNewConstants.POSTNEW_FAILURE,
});