import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDTO } from '../type/type.dto';
import { Brand } from '../../models/brand.model';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand)
    private readonly brandRepository: typeof Brand,
  ) {}

  async createBrand(data: CreateTypeDTO) {
    const { name } = data;
    const brand = await this.brandRepository.create({ name });
    return brand;
  }

  async getAll() {
    const brands = await this.brandRepository.findAll();
    return brands;
  }
}
