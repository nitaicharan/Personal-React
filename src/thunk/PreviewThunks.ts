import { AnyAction, Dispatch } from "redux";
import { updatePostAction } from "../actions/PostsPreviewActions";
import { Post } from "../models/Post";
import { toggleFavoritePost } from "../services/PreviewService";
import { State } from '../state';

export const toggleFavoritePostThunk = (post: Post) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        const { settings } = getState();

        toggleFavoritePost(post, settings.token)
            .then(({ data: { article } }) => dispatch(updatePostAction(article)));
    }
};