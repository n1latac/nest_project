import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from './device.model';
import { User } from './user.model';
@Table({ tableName: 'rating' })
export class Rating extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  device_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  rate: number;

  @BelongsTo(() => User, 'user_id')
  basket: User;

  @BelongsTo(() => Device, 'device_id')
  device: Device;
}
