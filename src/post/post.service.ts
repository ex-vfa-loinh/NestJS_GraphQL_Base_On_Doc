import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    posts = [
        {
            postId: 1,
            title: 'title 1',
            description: 'description 1',
            content: 'content 1',
            authorId: 1
        },
        {
            postId: 2,
            title: 'title 2',
            description: 'description 2',
            content: 'content 2',
            authorId: 2
        },
        {
            postId: 3,
            title: 'title 3',
            description: 'description 3',
            content: 'content 3',
            authorId: 1
        },
        {
            postId: 4,
            title: 'title 4',
            description: 'description 4',
            content: 'content 2',
            authorId: 2
        }
    ];
    async getPostByAuthor(authorId): Promise<any> {
        return this.posts.filter(x=> x.authorId === authorId);
    }
}
