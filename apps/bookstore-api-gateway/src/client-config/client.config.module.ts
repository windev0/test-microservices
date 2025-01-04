import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: {
        APP_PORT: joi.number().default(3030),
        USERS_CLIENT_PORT: joi.number().default(3001),
        BOOKS_CLIENT_PORT: joi.number().default(3002),
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ClientConfigModule {}
