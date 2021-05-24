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

interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
};
