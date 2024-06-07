import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateTypeDTO } from '../type/type.dto';
import { BrandService } from './brand.service';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from '../../constants/enums';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('create')
  createType(@Body() data: CreateTypeDTO) {
    return this.brandService.createBrand(data);
  }

  @Get('all')
  getAllTypes() {
    return this.brandService.getAll();
  }
}
