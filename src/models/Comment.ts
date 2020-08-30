export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Author;
}

interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}