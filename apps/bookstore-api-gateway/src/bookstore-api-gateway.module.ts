import { Module } from '@nestjs/common';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';
import { UsersModule } from './users/users.module';
import { BooksModule as BooksAppModule } from 'apps/books/src/books.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule, BooksAppModule],
  controllers: [BookstoreApiGatewayController],
  providers: [BookstoreApiGatewayService],
})
export class BookstoreApiGatewayModule {}
