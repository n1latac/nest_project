import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../models/user.model';
import { Basket } from '../../models/basket.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Basket])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
