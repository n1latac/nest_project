import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeDTO } from '../type/type.dto';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('create')
  createType(@Body() data: CreateTypeDTO) {
    return this.brandService.createBrand(data);
  }

  @Get('all')
  getAllTypes() {
    return this.brandService.getAll();
  }
}
