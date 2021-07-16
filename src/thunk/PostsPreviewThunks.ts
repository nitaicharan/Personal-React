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