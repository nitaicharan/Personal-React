import { AnyAction, Reducer } from "redux";
import { PostsPreviewConstants } from "../constants/PostsPreviewConstants";
import { Post } from "../models/Post";

export interface PostsPreviewState {
    articles: Post[];
    articlesCount: number;
    loading: boolean;
}

const initialState: PostsPreviewState = {
    articles: [],
    articlesCount: 0,
    loading: false,
}

const reducer: Reducer<PostsPreviewState, AnyAction> = (state = initialState, action: AnyAction): PostsPreviewState => {
    switch (action.type) {
        case PostsPreviewConstants.POSTSPREVIEW:
            return { ...state, loading: true };

        case PostsPreviewConstants.POSTSPREVIEW_SUCCESS:
        case PostsPreviewConstants.POSTSPREVIEW_SUCCESS:
            return { ...state, ...action.payload, loading: false };
        default:
            return state;
    }
};

export default reducer;