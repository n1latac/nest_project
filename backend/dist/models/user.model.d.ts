import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
