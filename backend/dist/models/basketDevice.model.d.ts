import { Model } from 'sequelize-typescript';
import { Basket } from './basket.model';
import { Device } from './device.model';
export declare class BasketDevice extends Model {
    device_id: number;
    basket_id: number;
    basket: Basket;
    device: Device;
}
