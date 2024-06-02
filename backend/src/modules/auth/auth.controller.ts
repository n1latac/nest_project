import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { AuthResponse } from '../../response';
import { JwtAuthGuard } from '../../guards/jwt-guard';

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
}
