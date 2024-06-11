import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from './type.model';
import { Brand } from './brand.model';
@Table({ tableName: 'type_brand', underscored: true })
export class TypeBrand extends Model {
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

  @BelongsTo(() => Type, 'type_id')
  type: Type;

  @BelongsTo(() => Brand, 'brand_id')
  brand: Brand;
}
