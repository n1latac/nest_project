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
    unique: true,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
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
