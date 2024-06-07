import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../modules/users/users.service';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly userService;
    constructor(reflector: Reflector, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
