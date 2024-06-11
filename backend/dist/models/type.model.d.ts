import { Model } from 'sequelize-typescript';
import { Device } from './device.model';
import { TypeBrand } from './typeBrand.model';
export declare class Type extends Model {
    name: string;
    devices: Device[];
    types: TypeBrand[];
    created_at: Date;
    updated_at: Date;
}
