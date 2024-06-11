import { Model } from 'sequelize-typescript';
import { Device } from './device.model';
import { TypeBrand } from './typeBrand.model';
export declare class Brand extends Model {
    name: string;
    devices: Device[];
    brands: TypeBrand[];
    created_at: Date;
    updated_at: Date;
}
