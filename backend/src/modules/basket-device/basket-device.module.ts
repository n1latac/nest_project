import { Module } from '@nestjs/common';
import { BasketDeviceService } from './basket-device.service';

@Module({
  providers: [BasketDeviceService],
})
export class BasketDeviceModule {}
