import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { BasketDevice } from './basketDevice.model';

@Table({ tableName: 'baskets' })
export class Basket extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_id: number;

  @BelongsTo(() => User, 'user_id')
  user: User;

  @HasMany(() => BasketDevice, 'basket_id')
  basketDevices: BasketDevice[];
}
