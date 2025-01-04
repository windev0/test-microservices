import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // Replace if necessary
        port: 3001, // Ensure this is the correct port
      },
      logger: console, // Enable logging for the microservice
    },
  );
  await app.listen();
  console.log('Users microservice is running on port 3001');
}
bootstrap();
