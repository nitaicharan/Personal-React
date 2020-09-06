import { AnyAction, Dispatch } from "redux";
import { toggleFavoritePost } from "../services/PreviewService";
import { State } from '../state';

export const toggleFavoritePostThunk = (slug: string) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => State) => {
        const { settings } = getState();
        toggleFavoritePost(slug, settings.token)
    }
};