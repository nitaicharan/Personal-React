import { Author } from "./Author";

export interface Post {
    title: string;
    slug: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    tagList: any[];
    description: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}