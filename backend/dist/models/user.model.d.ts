import { Model } from 'sequelize-typescript';
import { Basket } from './basket.model';
import { Rating } from './rating.model';
export declare class User extends Model {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    basket: Basket;
    rating: Rating[];
}
