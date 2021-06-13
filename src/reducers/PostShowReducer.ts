import { AnyAction, Reducer } from "redux";
import { FetchCommentsConstants, PostShowConstants } from "../constants/PostShowConstants";
import { Post } from "../models/Post";

export interface PostShowState {
    article: Post;
    comments: { [key: string]: string };
    login: boolean;
}

const reducer: Reducer<PostShowState, AnyAction> = (state = {} as PostShowState, action: AnyAction): PostShowState => {
    switch (action.type) {
        case PostShowConstants.POSTSHOW:
        case FetchCommentsConstants.FETCH_COMMENTS:
            return { ...state, login: true };
        case PostShowConstants.POSTSHOW_SUCCESS:
        case FetchCommentsConstants.FETCH_COMMENTS_SUCCESS:
            return { ...state, ...action.payload, login: false };
        case PostShowConstants.POSTSHOW_FAILURE:
        case FetchCommentsConstants.FETCH_COMMENTS_FAILURE:
            return { ...state, login: false };
        default:
            return state;
    }
};

export default reducer;