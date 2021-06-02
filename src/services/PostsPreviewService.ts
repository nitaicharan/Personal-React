import { api } from "./axiosConfig";

export interface Filter {
    limit?: number;
    offse?: number;
}

export const fetchPosts = () => api.get(`articles`);

const buildParams = (filter: Filter) => Object.keys(filter).reduce((obj, key, index) => `${key}=${Object.keys(filter)[index]}`, '?');