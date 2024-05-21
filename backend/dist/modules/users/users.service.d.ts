import { User } from '../../models/user.model';
import { UsersDto } from './users.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    hashPassword(password: string): Promise<string>;
    createUser(data: any): Promise<UsersDto>;
}
