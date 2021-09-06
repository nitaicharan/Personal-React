import { AnyAction, Dispatch } from "redux";
import { postsPreviewAction, postsPreviewFailureAction, postsPreviewSuccessAction } from '../actions/PostsPreviewActions';
import { PostsPreviewState } from '../reducers/PostsPreviewReducer';
import { fetchPosts } from '../services/PostsPreviewService';
import { fetchFeedsAction, fetchFeedsFailureAction, fetchFeedsSuccessAction } from './../actions/PostsPreviewActions';
import { fetchFeeds } from './../services/PostsPreviewService';
import { State } from './../state';

// TODO get filter in the store
export const fetchPostsThunk = (params?: { limit?: number, offset?: number, pageIndex?: number }) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        dispatch(postsPreviewAction());

        const { settings: { token }, postsPreview: { limit, articlesCount } } = getState();

        const { pageIndex, ...fetchParams } = { ...params, limit, offset: calcOffset({ ...params, articlesCount, limit }) };

        fetchPosts(token, fetchParams)
            .then(({ data }) => dispatch(postsPreviewSuccessAction({ ...data, ...params })))
            .catch(e => dispatch(postsPreviewFailureAction()));
    };
};

// TODO get filter in the store
export const fetchFeedsThunk = (params?: PostsPreviewState) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        dispatch(fetchFeedsAction());

        const { settings: { token } } = getState();
        fetchFeeds(token)
            .then(({ data }) => dispatch(fetchFeedsSuccessAction({ ...data })))
            .catch(e => dispatch(fetchFeedsFailureAction()));
    };
};

const calcOffset = (params: PostsPreviewState) => {
    const count = params.articlesCount ?? 0;
    const limit = params?.limit ?? 0;
    const index = params?.pageIndex ?? 0;
    const offset = limit * index;

    return offset <= count ? offset : count - (params.limit ?? 0);
}