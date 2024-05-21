import { UsersService } from './users.service';
import { UsersDto } from './users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(data: UsersDto): Promise<UsersDto>;
}
