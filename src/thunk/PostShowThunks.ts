import { AnyAction, Dispatch } from "redux";
import { fetchCommentsAction, fetchCommentsSuccessAction, postShowAction, postShowSuccessAction } from "../actions/PostShowActions";
import { PostShowState } from "../reducers/PostShowReducer";
import { fetchPost } from "../services/PostShowService";
import { State } from '../state';
import { postShowFailureAction } from './../actions/PostShowActions';
import { fetchComments } from './../services/PostShowService';

export const fetchPostThunk = (payload: string) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        dispatch(postShowAction());
        dispatch(fetchCommentsAction());

        fetchPost(payload)
            .then(({ data }) => dispatch(postShowSuccessAction(data as PostShowState)))
            .catch(() => dispatch(postShowFailureAction()));

        fetchComments(payload)
            .then(({ data }) => dispatch(fetchCommentsSuccessAction(data as PostShowState)));
    }
}