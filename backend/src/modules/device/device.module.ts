import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from '../../models/device.model';
import { DeviceInfo } from '../../models/deviceInfo.model';

@Module({
  imports: [SequelizeModule.forFeature([Device, DeviceInfo])],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
