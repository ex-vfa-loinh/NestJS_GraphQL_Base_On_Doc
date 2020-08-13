import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorService {

    async getAuthors(): Promise<Author[]> {
        return [
            {
                authorId: 1,
                authorName: 'Ryan',
                email: 'ryan@email.com',
                phoneNumber: '0919.447.098',
                address: 'HCM'
            },
            {
                authorId: 2,
                authorName: 'Bob',
                email: 'bob@email.com',
                phoneNumber: '0934.447.098',
                address: 'OTHER'
            },
            {
                authorId: 3,
                authorName: 'Smith',
                email: 'smith@email.com',
                phoneNumber: '0988.447.098',
                address: 'OTHER'
            }
        ]
    }
}
