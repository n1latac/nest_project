import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from './device.model';

@Table({ tableName: 'device_info', underscored: true })
export class DeviceInfo extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  device_id: number;

  @BelongsTo(() => Device, 'device_id')
  device: Device;
}
