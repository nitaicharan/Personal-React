import { AnyAction, Dispatch } from "redux";
import { toggleFavoritePost } from "../services/PreviewService";

export const toggleFavoritePostThunk = (slug: string) => {
    console.log(slug)
    return (dispatch: Dispatch<AnyAction>) => toggleFavoritePost(slug)
};