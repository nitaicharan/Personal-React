import { AnyAction, Reducer } from "redux";
import { PostsPreviewConstants, UpdatePost } from "../constants/PostsPreviewConstants";
import { Post } from "../models/Post";
import { FetchFeedsConstants } from './../constants/PostsPreviewConstants';

export interface PostsPreviewState {
    articles?: Post[],
    articlesCount?: number,
    loading?: boolean,
    pageIndex?: number,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number,
}

const initialState: PostsPreviewState = {
    articles: [],
    articlesCount: 0,
    loading: false,
    pageIndex: 0,
    author: '',
    favorited: '',
    limit: 20,
    offset: 0,
}

const reducer: Reducer<PostsPreviewState, AnyAction> = (state = initialState, action: AnyAction): PostsPreviewState => {
    switch (action.type) {
        case FetchFeedsConstants.FETCH_FEEDS:
        case PostsPreviewConstants.POSTS_PREVIEW:
            return { ...state, articles: [], offset: (state.limit ?? 0) * (state.pageIndex ?? 0), loading: true };

        case FetchFeedsConstants.FETCH_FEEDS_SUCCESS:
        case PostsPreviewConstants.POSTS_PREVIEW_SUCCESS:
            return { ...state, ...action.payload, loading: false };

        case FetchFeedsConstants.FETCH_FEEDS_FAILURE:
        case PostsPreviewConstants.POSTS_PREVIEW_FAILURE:
            return { ...state, loading: false };

        case UpdatePost.UPDATE_POST:
            const articles = state.articles?.map(i => {
                if (action.payload.slug === i.slug) return action.payload as Post;
                return i;
            });
            return { ...state, articles };
        default:
            return state;
    }
};

export default reducer;