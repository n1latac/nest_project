import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto, GetAllDevicesDTO } from './device.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split('').join('_') + '_' + Date.now() + '.' + fileExtension;
          cb(null, newFileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(null, false);
        }
        cb(null, true);
      },
    }),
  )
  createType(
    @Body() data: CreateDeviceDto,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    console.log(file);
    return this.deviceService.createDevice(data, file);
  }

  @Post('all')
  getAllTypes(@Body() data: GetAllDevicesDTO) {
    return this.deviceService.getAll(data);
  }

  @Get('one')
  getOneDevice(@Query('id') id: number) {
    return this.deviceService.getOneDeviceById(id);
  }
}
