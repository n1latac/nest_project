import { Model } from 'sequelize-typescript';
import { Device } from './device.model';
import { User } from './user.model';
export declare class Rating extends Model {
    user_id: number;
    device_id: number;
    rate: number;
    basket: User;
    device: Device;
}
