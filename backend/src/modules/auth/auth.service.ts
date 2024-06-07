import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/users.dto';
import { AppError } from '../../common/errors';
import { LoginUserDTO } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from '../../response';
import { TokenService } from '../token/token.service';
import { Role } from '../../constants/enums';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(data: CreateUserDTO) {
    const existUser = await this.userService.findUserByEmail(data?.email);
    if (existUser) {
      throw new BadRequestException(AppError.USER_EMAIL_EXIST);
    }
    data.role = Role.CUSTOMER;
    return this.userService.createUser(data);
  }

  async loginUser(data: LoginUserDTO): Promise<AuthResponse> {
    const existUser = await this.userService.findUserByEmail(data?.email);
    if (!existUser) {
      throw new BadRequestException(AppError.BAD_REQUEST_DATA);
    }

    const isValidPassword = await bcrypt.compare(
      data?.password,
      existUser?.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException(AppError.BAD_REQUEST_DATA);
    }

    const user = await this.userService.publicUser(data?.email);

    const token = await this.tokenService.generateJwtToken({
      id: user?.id,
      email: data?.email,
      role: existUser.role,
    });

    return { ...user, token };
  }
}
