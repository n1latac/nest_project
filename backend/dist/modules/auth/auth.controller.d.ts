import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { AuthResponse } from '../../response';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: CreateUserDTO): Promise<CreateUserDTO>;
    login(data: LoginUserDTO): Promise<AuthResponse>;
    checkJwt(): boolean;
    checkRole(): boolean;
}
