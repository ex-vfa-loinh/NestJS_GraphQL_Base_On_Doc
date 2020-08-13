import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    AuthorModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
