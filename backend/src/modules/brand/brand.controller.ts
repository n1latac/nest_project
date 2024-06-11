import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateTypeDTO } from '../type/type.dto';
import { BrandService } from './brand.service';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from '../../constants/enums';
import { SuccessResponseDTO } from '../../response';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('create')
  async createType(@Body() data: CreateTypeDTO): Promise<SuccessResponseDTO> {
    const result = await this.brandService.createBrand(data);
    return new SuccessResponseDTO(result);
  }

  @Get('all')
  async getAllTypes(): Promise<SuccessResponseDTO> {
    const result = await this.brandService.getAll();
    return new SuccessResponseDTO(result);
  }
}
