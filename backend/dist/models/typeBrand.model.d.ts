import { Model } from 'sequelize-typescript';
import { Type } from './type.model';
import { Brand } from './brand.model';
export declare class TypeBrand extends Model {
    type_id: number;
    brand_id: number;
    type: Type;
    brand: Brand;
}
