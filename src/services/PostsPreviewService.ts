import { api } from "./axiosConfig";

export interface Filter {
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
}

export const fetchPosts = (token: string, params?: Filter) => api.get(`articles`, {
    params,
    headers: { Authorization: token ? `Token ${token}` : '' }
});

export const fetchFeeds = (token: string, params?: Filter) => api.get(`articles/feed`, {
    params,
    headers: { Authorization: `Token ${token}` }
});