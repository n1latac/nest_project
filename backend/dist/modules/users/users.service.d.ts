import { User } from '../../models/user.model';
import { CreateUserDTO } from './users.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    hashPassword(password: string): Promise<string>;
    findUserByEmail(email: string): Promise<User>;
    createUser(data: CreateUserDTO): Promise<CreateUserDTO>;
    publicUser(email: string): Promise<User>;
    getUserById(id: number): Promise<User>;
}
