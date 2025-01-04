import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PARTERNS } from '@app/contracts/books/books.parterns';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.bookClient.send(BOOKS_PARTERNS.CREATE, createBookDto);
  }

  findAll() {
    return this.bookClient.send(BOOKS_PARTERNS.FIND_ALL, {});
  }

  
  findOne(id: string) {
    return this.bookClient.send(BOOKS_PARTERNS.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookClient.send(BOOKS_PARTERNS.UPDATE, id);;
  }

  remove(id: number) {
    return this.bookClient.send(BOOKS_PARTERNS.DELETE, id);;
  }
}
