import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from '../../models/device.model';
import { DeviceInfo } from '../../models/deviceInfo.model';
import { UsersService } from '../users/users.service';
import { User } from '../../models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Device, DeviceInfo, User])],
  controllers: [DeviceController],
  providers: [DeviceService, UsersService],
})
export class DeviceModule {}
