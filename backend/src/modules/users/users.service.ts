import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(data: CreateUserDTO): Promise<CreateUserDTO> {
    data.password = await this.hashPassword(data.password);
    const result = await this.userRepository.create({
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      password: data?.password,
    });
    return result;
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
}
