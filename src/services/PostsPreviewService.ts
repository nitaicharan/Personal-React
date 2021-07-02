import { api } from "./axiosConfig";

export interface Filter {
    limit?: number;
    offse?: number;
}

export const fetchPosts = () => api.get(`articles`);