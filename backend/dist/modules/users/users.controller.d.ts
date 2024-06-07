import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(data: CreateUserDTO): Promise<CreateUserDTO>;
}
