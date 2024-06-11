import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Basket } from './basket.model';
import { Rating } from './rating.model';

@Table({ tableName: 'users', underscored: true })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'customer',
  })
  role: string;

  @HasOne(() => Basket, 'user_id')
  basket: Basket;

  @HasMany(() => Rating, 'user_id')
  rating: Rating[];
}
