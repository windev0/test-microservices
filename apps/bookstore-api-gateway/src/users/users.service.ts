import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_CLIENT') private usersClientService: ClientProxy,
  ) {}

  findAll() {
    return this.usersClientService.send({ cmd: 'users.findAll' }, {});
  }
}
