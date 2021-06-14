import { Post } from "../models/Post";
import { PostNewState } from "../reducers/PostNewReducer";
import { api } from "./axiosConfig";

export const createPost = (article: PostNewState, token: string) => api.post<{ article: Post }>(`articles`, { article }, {
    headers: {
        Authorization: `Token ${token}`,
    }
});