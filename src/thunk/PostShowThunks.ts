import { commentAction, fetchCommentsAction, fetchCommentsSuccessAction, postShowAction, postShowFailureAction, postShowSuccessAction } from "../actions/PostShowActions";
import { PostShowState } from "../reducers/PostShowReducer";
import { State } from "../state";
import { commentFailureAction, commentSuccessAction, fetchCommentsFailureAction } from './../actions/PostShowActions';
import { commentPost, fetchComments, fetchPost } from './../services/PostShowService';

// TODO get slug from redux route
export const fetchPostThunk = (slug: string) => {
    return (dispatch: any) => {
        dispatch(postShowAction());

        fetchPost(slug)
            .then(({ data }) => dispatch(postShowSuccessAction({ ...data } as PostShowState)))
            .then(() => dispatch(fetchCommentsThunk()))
            .catch(() => dispatch(postShowFailureAction()));
    }
}

// TODO get slug from redux route
export const fetchCommentsThunk = () => {
    return (dispatch: any, getState: () => State) => {
        dispatch(fetchCommentsAction());
        const {
            postShow: {
                article: { slug }
            }
        } = getState();

        fetchComments(slug)
            .then(({ data }) => dispatch(fetchCommentsSuccessAction(data as PostShowState)))
            // TODO display error message
            .catch(() => dispatch(fetchCommentsFailureAction()));
    }
}

// TODO get slug from redux route
// TODO get body from redux postShow-comment-body
export const commentPostThunk = (body: string) => {
    return (dispatch: any, getState: () => State) => {
        dispatch(commentAction());
        const {
            settings: { token },
            postShow: {
                article: { slug }
            }
        } = getState();

        commentPost({ slug, body, token })
            .then(() => dispatch(commentSuccessAction()))
            .then(() => dispatch(fetchCommentsThunk()))
            // TODO display error message
            .catch(() => dispatch(commentFailureAction()));
    }
}