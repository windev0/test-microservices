import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  private _users: UserDTO[] = [
    {
      name: 'John Doe',
      age: 30,
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      age: 28,
      address: '456 Elm St',
    },
  ];
  findAll(): UserDTO[] {
    return this._users;
  }
}
