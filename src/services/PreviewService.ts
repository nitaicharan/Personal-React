import { api } from "./axiosConfig";

export const toggleFavoritePost = (slug: string, token: string) => api.post(`articles/${slug}/favorite`, {}, {
    headers: {
        Authorization: `Token ${token}`,
    }
});