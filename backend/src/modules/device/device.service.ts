import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDeviceDto, GetAllDevicesDTO } from './device.dto';
import { AppError } from '../../common/errors';
import { Device } from '../../models/device.model';
import { InjectModel } from '@nestjs/sequelize';
import { DeviceInfo } from '../../models/deviceInfo.model';

@Injectable()
export class DeviceService {
  @InjectModel(Device)
  private readonly deviceRepository: typeof Device;
  async createDevice(data: CreateDeviceDto, file) {
    const { name, price, brand_id, type_id, info } = data;

    try {
      const device = await Device.create({
        name,
        price,
        brand_id,
        type_id,
        img: file.filename,
      });

      if (info) {
        const objectInfo = JSON.parse(info);
        await DeviceInfo.create({
          title: objectInfo.title,
          description: objectInfo.description,
          device_id: objectInfo.id,
        });
      }
      return device;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(data: GetAllDevicesDTO) {
    const { brand_id, type_id, limit = 10, page = 1 } = data;
    const offset = page * limit - page;
    let devices;
    if (!brand_id && !type_id) {
      devices = await this.deviceRepository.findAndCountAll({ limit, offset });
    }
    if (brand_id && !type_id) {
      devices = await this.deviceRepository.findAndCountAll({
        where: { brand_id },
        limit,
        offset,
      });
    }
    if (!brand_id && type_id) {
      devices = await this.deviceRepository.findAndCountAll({
        where: { type_id },
        limit,
        offset,
      });
    }
    if (brand_id && type_id) {
      devices = await this.deviceRepository.findAndCountAll({
        where: { type_id, brand_id },
        limit,
        offset,
      });
    }
    return { result: devices.rows, count: devices.count };
  }

  async getOneDeviceById(id: number) {
    if (id === undefined) {
      throw new BadRequestException(AppError.BAD_REQUEST_DATA);
    }
    const device = await Device.findOne({
      where: { id },
      include: [{ association: 'device_info' }],
    });
    return device;
  }
}
