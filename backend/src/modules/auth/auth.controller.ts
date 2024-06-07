import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { AuthResponse, SuccessResponseDTO } from '../../response';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Role } from '../../constants/enums';
import { Roles } from '../../decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUser(data);
  }

  @Post('login')
  login(@Body() data: LoginUserDTO): Promise<AuthResponse> {
    return this.authService.loginUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  checkJwt() {
    return true;
  }

  @Post('test-role')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  checkRole() {
    return true;
  }
}
