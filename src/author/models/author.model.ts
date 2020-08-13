import {ObjectType, Field, Int} from '@nestjs/graphql';
import { Post } from '../../post/models/post.model';


@ObjectType()
export class Author {

    @Field(type => Int)
    authorId: number;

    @Field({nullable: false, defaultValue: 'ryan'})
    authorName: string;

    @Field({nullable: false})
    email: string;

    @Field()
    phoneNumber: string;

    @Field()
    address: string;

    @Field(type => [Post], {nullable: true})
    posts?: Post[];
}