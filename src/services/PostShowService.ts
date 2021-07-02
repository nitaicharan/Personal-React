import { Post } from "../models/Post";
import { api } from "./axiosConfig";

interface Comment {
    body: string;
    token: string;
    slug: string;
}

export const fetchPost = (slug: string) => api.get<{ article: Post }>(`articles/${slug}`);

export const fetchComments = (slug: string) => api.get<{ comments: any }>(`articles/${slug}/comments`);

export const commentPost = (comment: Comment) => api.post<{ article: Post }>(`articles/${comment.slug}/comments`, { comment: { body: comment.body } }, {
    headers: { Authorization: `Token ${comment.token}`, }
});

export const deleteCommentPost = (params: { slug: string, commentId: number, token: string }) => api.delete(`articles/${params.slug}/comments/${params.commentId}`, {
    headers: { Authorization: `Token ${params.token}`, }
});