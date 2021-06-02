import { AnyAction } from "redux";
import { PostsPreviewConstants } from "../constants/PostsPreviewConstants";
import { PostsPreviewState } from "../reducers/PostsPreview";

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