import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/users.dto';
import { LoginUserDTO } from './dto/auth.dto';
import { TokenService } from '../token/token.service';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UsersService, tokenService: TokenService);
    registerUser(data: CreateUserDTO): Promise<{
        user: any;
        token: string;
    }>;
    loginUser(data: LoginUserDTO): Promise<{
        user: import("../../models/user.model").User;
        token: string;
    }>;
}
