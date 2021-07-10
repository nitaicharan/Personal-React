import { AnyAction } from "redux";
import { FetchFeedsConstants, PostsPreviewConstants, UpdatePost } from "../constants/PostsPreviewConstants";
import { Post } from "../models/Post";

export const postsPreviewAction = (): AnyAction => ({
    type: PostsPreviewConstants.POSTS_PREVIEW,
});

export const postsPreviewSuccessAction = (payload: Post): AnyAction => ({
    type: PostsPreviewConstants.POSTS_PREVIEW_SUCCESS,
    payload
});

export const postsPreviewFailureAction = (): AnyAction => ({
    type: PostsPreviewConstants.POSTS_PREVIEW_FAILURE,
});

export const updatePostAction = (payload: Post): AnyAction => ({
    type: UpdatePost.UPDATE_POST,
    payload
});

export const fetchFeedsAction = (): AnyAction => ({
    type: FetchFeedsConstants.FETCH_FEEDS,
});

export const fetchFeedsSuccessAction = (payload: Post): AnyAction => ({
    type: FetchFeedsConstants.FETCH_FEEDS_SUCCESS,
    payload
});

export const fetchFeedsFailureAction = (): AnyAction => ({
    type: FetchFeedsConstants.FETCH_FEEDS_FAILURE,
});