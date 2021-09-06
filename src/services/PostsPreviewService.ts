import { PostsPreviewState } from "../reducers/PostsPreviewReducer";
import { api } from "./axiosConfig";

export const fetchPosts = (token: string, params?: PostsPreviewState) => api.get(`articles`, {
    params,
    headers: { Authorization: token ? `Token ${token}` : '' }
});

export const fetchFeeds = (token: string, params?: PostsPreviewState) => api.get(`articles/feed`, {
    params,
    headers: { Authorization: `Token ${token}` }
});