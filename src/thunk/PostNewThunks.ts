import { AnyAction, Dispatch } from "redux";
import { postsPreviewFailureAction, postsPreviewSuccessAction } from '../actions/PostsPreviewActions';
import { createPost } from "../services/PostNewService";
import { State } from '../state';
import { postNewAction } from './../actions/PostNewActions';
import { PostNewState } from './../reducers/PostNewReducer';

export const createPostThunk = (payload: PostNewState) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        dispatch(postNewAction(payload));

        const { settings: { token } } = getState();

        createPost(payload, token)
            .then(({ data }) => dispatch(postsPreviewSuccessAction({ ...data.article })))
            .catch(e => dispatch(postsPreviewFailureAction()));
    };
};