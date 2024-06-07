import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from './device.model';
import { TypeBrand } from './typeBrand.model';
@Table({ tableName: 'brands' })
export class Brand extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  name: string;

  @HasMany(() => Device, 'brand_id')
  devices: Device[];

  // @BelongsToMany(() => TypeBrand, {
  //   through: 'type_brand',
  //   foreignKey: 'brand_id',
  // })
  // brands: TypeBrand[];

  @HasMany(() => TypeBrand, 'brand_id')
  brands: TypeBrand[];
}
