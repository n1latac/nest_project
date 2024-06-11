import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppError } from '../common/errors';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context: ExecutionContext) {
    if (err || !user) {
      throw new UnauthorizedException(AppError.USER_UNAUTHORIZED);
    }

    const request = context.switchToHttp().getRequest();
    request.user = user;
    request.token = request.headers.authorization.split(' ')[1];

    return user;
  }
}
