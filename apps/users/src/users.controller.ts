import { Controller, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/users.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  private logger = new Logger();
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'users.findAll' })
  getUsers(): UserDTO[] {
    try {
      const users = this.usersService.findAll();
      return users;
    } catch (error) {
      this.logger.error(`Error fetching users: ${error.message}`);
      throw error;
    }
  }
}
