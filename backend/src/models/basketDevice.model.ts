import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Basket } from './basket.model';
import { Device } from './device.model';
@Table({ tableName: 'basket_devices', underscored: true })
export class BasketDevice extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  device_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  basket_id: number;

  @BelongsTo(() => Basket, 'basket_id')
  basket: Basket;

  @BelongsTo(() => Device, 'device_id')
  device: Device;
}
