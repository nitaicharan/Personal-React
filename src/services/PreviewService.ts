import { api } from "./axiosConfig";

export const toggleFavoritePost = (slug: string) => api.post(`articles/${slug}/favorite`);