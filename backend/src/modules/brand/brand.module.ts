import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from '../../models/brand.model';
import { User } from '../../models/user.model';
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([Brand, User])],
  controllers: [BrandController],
  providers: [BrandService, UsersService],
})
export class BrandModule {}
