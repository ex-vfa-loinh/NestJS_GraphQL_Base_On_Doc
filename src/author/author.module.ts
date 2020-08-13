import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PostService } from '../post/post.service';

@Module({
  providers: [AuthorService, AuthorResolver, PostService]
})
export class AuthorModule {}
