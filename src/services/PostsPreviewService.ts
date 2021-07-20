import { api } from "./axiosConfig";

export interface Filter {
    author?: string;
    favorited?: string;
    limit?: number;
    offse?: number;
}

export const fetchPosts = (params?: Filter) => api.get(`articles`, { params });