import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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
  async register(@Body() data: CreateUserDTO): Promise<SuccessResponseDTO> {
    const { user, token } = await this.authService.registerUser(data);
    return new SuccessResponseDTO({ user, token });
  }

  @Post('login')
  async login(@Body() data: LoginUserDTO): Promise<SuccessResponseDTO> {
    const { user, token } = await this.authService.loginUser(data);
    return new SuccessResponseDTO({ user, token });
  }

  @UseGuards(JwtAuthGuard)
  @Get('check-auth')
  async checkJwt(@Req() request): Promise<SuccessResponseDTO> {
    const user = request.user;
    const token = request.token;
    return new SuccessResponseDTO({ user, token });
  }

  @Post('test-role')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  checkRole() {}
}
