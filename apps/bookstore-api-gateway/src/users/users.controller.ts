import { Controller, Get, Logger } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private logger = new Logger();
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    try {
      return this.userService.findAll();
    } catch (error) {
      this.logger.error(`Failed to get users: ${error.message}`);
      throw error;
    }
  }
}
