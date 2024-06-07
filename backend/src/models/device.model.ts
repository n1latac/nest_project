import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { BasketDevice } from './basketDevice.model';
import { Rating } from './rating.model';
import { Type } from './type.model';
import { Brand } from './brand.model';
import { DeviceInfo } from './deviceInfo.model';

@Table({ tableName: 'devices' })
export class Device extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  price: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  rating: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  img: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  type_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  brand_id: number;

  @HasOne(() => BasketDevice, 'device_id')
  basketDevice: BasketDevice;

  @HasMany(() => Rating, 'device_id')
  device_rating: Rating[];

  @BelongsTo(() => Type, 'type_id')
  type: Type;

  @BelongsTo(() => Brand, 'brand_id')
  brand: Brand;

  @HasMany(() => DeviceInfo, 'device_id')
  device_info: DeviceInfo[];
}
