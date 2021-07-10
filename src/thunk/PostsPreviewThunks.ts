import { fetchFeeds } from './../services/PostsPreviewService';
import { State } from './../state';
import { fetchFeedsAction, fetchFeedsFailureAction, fetchFeedsSuccessAction } from './../actions/PostsPreviewActions';
import { AnyAction, Dispatch } from "redux";
import { fetchPosts, Filter } from '../services/PostsPreviewService';
import { postsPreviewAction, postsPreviewFailureAction, postsPreviewSuccessAction } from '../actions/PostsPreviewActions';

// TODO get filter in the store
export const fetchPostsThunk = (params?: Filter) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(postsPreviewAction());

        fetchPosts(params)
            .then(({ data }) => dispatch(postsPreviewSuccessAction({ ...data })))
            .catch(e => dispatch(postsPreviewFailureAction()));
    };
};

// TODO get filter in the store
export const fetchFeedsThunk = (params?: Filter) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        dispatch(fetchFeedsAction());

        const { settings: { token } } = getState();
        fetchFeeds(token)
            .then(({ data }) => dispatch(fetchFeedsSuccessAction({ ...data })))
            .catch(e => dispatch(fetchFeedsFailureAction()));
    };
};