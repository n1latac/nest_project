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
@Table({
  tableName: 'types',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
})
export class Type extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  name: string;

  @HasMany(() => Device, 'type_id')
  devices: Device[];
  //
  // @BelongsToMany(() => TypeBrand, {
  //   through: 'type_brand',
  //   foreignKey: 'type_id',
  // })
  // types: TypeBrand[];

  @HasMany(() => TypeBrand, 'type_id')
  types: TypeBrand[];

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_at: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updated_at: Date;
}
