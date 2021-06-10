import { AnyAction } from "redux";
import { PostsPreviewConstants, UpdatePost } from "../constants/PostsPreviewConstants";
import { Post } from "../models/Post";
import { PostsPreviewState } from "../reducers/PostsPreviewReducer";

export const postsPreviewAction = (): AnyAction => ({
    type: PostsPreviewConstants.POSTSPREVIEW,
});

export const postsPreviewSuccessAction = (payload: PostsPreviewState): AnyAction => ({
    type: PostsPreviewConstants.POSTSPREVIEW_SUCCESS,
    payload
});

export const postsPreviewFailureAction = (): AnyAction => ({
    type: PostsPreviewConstants.POSTSPREVIEW_FAILURE,
});

export const updatePostAction = (payload: Post): AnyAction => ({
    type: UpdatePost.UPDATE_POST,
    payload
});
