import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from '../../models/type.model';

@Module({
  imports: [SequelizeModule.forFeature([Type])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
