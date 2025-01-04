import { NestFactory } from '@nestjs/core';
import { BooksModule } from './books.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BooksModule,
    { transport: Transport.TCP, options: { port: 3002 } },
  );
  await app.listen();
  console.log('Books microservice started on port 3002');
}
bootstrap();
