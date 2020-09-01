import { AnyAction, Reducer } from "redux";
import { CommentConstants, FetchCommentsConstants, PostShowConstants } from "../constants/PostShowConstants";
import { Comment } from "../models/Comment";
import { Post } from "../models/Post";

export interface PostShowState {
    article: Post;
    comments: Comment[];
    comment: { body: string };
    login: boolean;
}

const reducer: Reducer<PostShowState, AnyAction> = (state = {} as PostShowState, action: AnyAction): PostShowState => {
    switch (action.type) {
        case CommentConstants.COMMENT:
            return { ...state, login: true };
        case FetchCommentsConstants.FETCH_COMMENTS:
            return { ...state, login: true };
        case PostShowConstants.POSTSHOW:
            return { ...state, article: {} as Post, login: true };

        case CommentConstants.COMMENT_SUCCESS:
        case PostShowConstants.POSTSHOW_SUCCESS:
        case FetchCommentsConstants.FETCH_COMMENTS_SUCCESS:
            return { ...state, ...action.payload, login: false };

        case CommentConstants.COMMENT_FAILURE:
        case PostShowConstants.POSTSHOW_FAILURE:
        case FetchCommentsConstants.FETCH_COMMENTS_FAILURE:
            return { ...state, login: false };
        default:
            return state;
    }
};

export default reducer;