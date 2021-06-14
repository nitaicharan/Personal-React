import { Author } from "./Author";

export interface Post {
    title: string;
    slug: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    tagList: tag[];
    description: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}

export type tag = string;