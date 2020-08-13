import {ObjectType, Int, Field} from '@nestjs/graphql';


@ObjectType()
export class Post {
    @Field(type => Int)
    postId: number;

    @Field({nullable: false})
    title: string;

    @Field({nullable: false})
    description: string;

    @Field({nullable: false})
    content: string;
}