import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../constants/enums';
import { UsersService } from '../modules/users/users.service';
import { AppError } from '../common/errors';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string>('roles', context.getHandler());

    const request = context.switchToHttp().getRequest();

    if (request?.user) {
      const { id } = request.user;

      const user = await this.userService.getUserById(id);

      if (!roles.includes(user?.role)) {
        throw new ForbiddenException(AppError.ACCESS_DENIED_DUE_TO_ROLE);
      }
      return roles.includes(user?.role);
    }
  }
}
