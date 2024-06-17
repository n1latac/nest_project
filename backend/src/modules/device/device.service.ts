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
    const { name, price: priceString, brand_id, type_id, info } = data;
    const price = Number(priceString);
    try {
      const device = await Device.create({
        name,
        price,
        brand_id,
        type_id,
        img: file.filename,
      });

      if (info) {
        const ArrayInfo = JSON.parse(info);
        console.log(ArrayInfo);
        for (const item of ArrayInfo) {
          await DeviceInfo.create({
            title: item.title,
            description: item.description,
            device_id: device.id,
          });
        }
      }
      return device;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(data) {
    const {
      brand_id: brand_id_string,
      type_id: type_id_string,
      limit = 10,
      page = 1,
    } = data;
    const brand_id = Number(brand_id_string);
    const type_id = Number(type_id_string);
    const offset = (page - 1) * limit;
    let devices;
    if (!brand_id && !type_id) {
      devices = await this.deviceRepository.findAndCountAll({
        limit,
        offset,
        include: [
          {
            association: 'type',
          },
          {
            association: 'brand',
          },
        ],
      });
    }
    if (brand_id && !type_id) {
      console.log('here');
      console.log(limit);
      console.log(offset);
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
