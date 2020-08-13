import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './models/author.model';
import { PostService } from '../post/post.service';
import { Post } from '../post/models/post.model';

@Resolver( of => Author)
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService,
        private readonly postService: PostService) {}

    @Query(returns => [Author])
    async getAuthor() {
        return await this.authorService.getAuthors();
    }

    @ResolveField('posts', returns => [Post])
    async posts(@Parent() author: Author) {
        const {authorId} = author;
        return this.postService.getPostByAuthor(authorId);
    }
}
