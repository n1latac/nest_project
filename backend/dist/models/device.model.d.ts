import { Model } from 'sequelize-typescript';
import { BasketDevice } from './basketDevice.model';
import { Rating } from './rating.model';
import { Type } from './type.model';
import { Brand } from './brand.model';
import { DeviceInfo } from './deviceInfo.model';
export declare class Device extends Model {
    name: string;
    price: number;
    rating: number;
    img: string;
    type_id: number;
    brand_id: number;
    basketDevice: BasketDevice;
    device_rating: Rating[];
    type: Type;
    brand: Brand;
    device_info: DeviceInfo[];
}
