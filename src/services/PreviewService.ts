import { Post } from "../models/Post";
import { api } from "./axiosConfig";

export const toggleFavoritePost = (post: Post, token: string) => {
    if (post.favorited) {
        return api.delete<{ article: Post }>(`articles/${post.slug}/favorite`, {
            headers: {
                Authorization: `Token ${token}`,
            }
        });
    }

    return api.post<{ article: Post }>(`articles/${post.slug}/favorite`, {}, {
        headers: {
            Authorization: `Token ${token}`,
        }
    });
};