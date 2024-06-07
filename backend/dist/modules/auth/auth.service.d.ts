import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { AuthResponse } from '../../response';
import { TokenService } from '../token/token.service';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UsersService, tokenService: TokenService);
    registerUser(data: CreateUserDTO): Promise<CreateUserDTO>;
    loginUser(data: LoginUserDTO): Promise<AuthResponse>;
}
