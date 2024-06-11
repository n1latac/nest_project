import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { SuccessResponseDTO } from '../../response';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: CreateUserDTO): Promise<SuccessResponseDTO>;
    login(data: LoginUserDTO): Promise<SuccessResponseDTO>;
    checkJwt(request: any): Promise<SuccessResponseDTO>;
    checkRole(): void;
}
