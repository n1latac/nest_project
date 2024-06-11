import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateTypeDTO } from './type.dto';
import { TypeService } from './type.service';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from '../../constants/enums';
import { SuccessResponseDTO } from '../../response';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('create')
  async createType(@Body() data: CreateTypeDTO): Promise<SuccessResponseDTO> {
    const result = await this.typeService.createType(data);
    return new SuccessResponseDTO(result);
  }

  @Get('all')
  async getAllTypes(): Promise<SuccessResponseDTO> {
    const result = await this.typeService.getAll();
    return new SuccessResponseDTO(result);
  }
}
