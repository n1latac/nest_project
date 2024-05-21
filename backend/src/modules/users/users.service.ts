import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import * as bcrypt from 'bcrypt';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async createUser(data): Promise<UsersDto> {
    data.password = await this.hashPassword(data.password);
    const result = await this.userRepository.create(data);
    return result;
  }
}
