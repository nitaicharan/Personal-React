import { AnyAction, Dispatch } from "redux";
import { fetchPosts } from '../services/PostsPreviewService';
import { postsPreviewAction, postsPreviewFailureAction, postsPreviewSuccessAction } from '../actions/PostsPreviewActions';

export const fetchPostsThunk = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(postsPreviewAction());

        fetchPosts()
            .then(({ data }) => dispatch(postsPreviewSuccessAction({ ...data })))
            .catch(e => dispatch(postsPreviewFailureAction()));
    };
};