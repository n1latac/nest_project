import { Model } from 'sequelize-typescript';
import { User } from './user.model';
import { BasketDevice } from './basketDevice.model';
export declare class Basket extends Model {
    user_id: number;
    user: User;
    basketDevices: BasketDevice[];
}
