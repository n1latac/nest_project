import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('create')
  createUser(@Body() data: CreateUserDTO) {
    return this.userService.createUser(data);
  }
}
