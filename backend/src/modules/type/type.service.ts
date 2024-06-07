import { Injectable } from '@nestjs/common';
import { CreateTypeDTO } from './type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from '../../models/type.model';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private readonly typeRepository: typeof Type,
  ) {}

  async createType(data: CreateTypeDTO) {
    const { name } = data;
    const type = await this.typeRepository.create({ name });
    return type;
  }

  async getAll() {
    const types = await this.typeRepository.findAll();
    return types;
  }
}
