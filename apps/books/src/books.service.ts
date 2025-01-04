import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './dto/book.dto';

@Injectable()
export class BooksService {
  private _books: Book[] = [
    {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      publicationDate: new Date(),
    },
    {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      publicationDate: new Date(),
    },
    {
      id: '3',
      title: 'Book 3',
      author: 'Author 3',
      publicationDate: new Date(),
    },
  ];
  create(createBookDto: CreateBookDto) {
    this._books.push({
      ...createBookDto,
      id: (this._books.length + 1)?.toString(),
    });
    return this._books;
  }

  findAll() {
    return this._books;
  }

  findOne(id: string) {
    return this._books.find((book) => book.id === id);
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const index = this._books.findIndex((book) => book.id === id);
    if (index >= 0) {
      this._books[index] = { ...this._books[index], ...updateBookDto };
    }
    return this._books[index];
  }

  remove(id: string) {
    const index = this._books.findIndex((book) => book.id === id);
    if (index >= 0) {
      this._books.splice(index, 1);
    }
    return this._books;
  }
}
