import { Module } from '@nestjs/common';
import { DeviceInfoController } from './device_info.controller';
import { DeviceInfoService } from './device_info.service';

@Module({
  controllers: [DeviceInfoController],
  providers: [DeviceInfoService],
})
export class DeviceInfoModule {}
