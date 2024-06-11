import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from '../../models/type.model';
import { User } from '../../models/user.model';
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([Type, User])],
  controllers: [TypeController],
  providers: [TypeService, UsersService],
})
export class TypeModule {}
