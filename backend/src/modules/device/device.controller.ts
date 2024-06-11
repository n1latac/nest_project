import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto, GetAllDevicesDTO } from './device.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from '../../constants/enums';
import { SuccessResponseDTO } from '../../response';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
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
  async createSneaker(
    @Body() data: CreateDeviceDto,
    @UploadedFile()
    file: Express.Multer.File,
  ): Promise<SuccessResponseDTO> {
    const result = await this.deviceService.createDevice(data, file);
    return new SuccessResponseDTO(result);
  }

  @Get('all')
  async getAllDevices(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('brand_id') brand_id?: number,
    @Query('type_id') type_id?: number,
  ): Promise<SuccessResponseDTO> {
    const data = {
      brand_id,
      type_id,
      limit: Number(limit),
      page: Number(page),
    };
    const result = await this.deviceService.getAll(data);
    return new SuccessResponseDTO(result);
  }

  @Get('one/:id')
  async getOneDevice(@Param('id') id: number): Promise<SuccessResponseDTO> {
    console.log(id);
    const result = await this.deviceService.getOneDeviceById(id);
    return new SuccessResponseDTO(result);
  }
}
