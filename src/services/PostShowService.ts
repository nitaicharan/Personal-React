import { Post } from "../models/Post";
import { api } from "./axiosConfig";

export const fetchPost = (slug: string) => api.get<{ article: Post }>(`articles/${slug}`);

export const fetchComments = (slug: string) => api.get<{ comments: any }>(`articles/${slug}/comments`);