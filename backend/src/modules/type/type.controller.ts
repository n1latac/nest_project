import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateTypeDTO } from './type.dto';
import { TypeService } from './type.service';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { Role } from '../../constants/enums';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('create')
  createType(@Body() data: CreateTypeDTO) {
    return this.typeService.createType(data);
  }

  @Get('all')
  getAllTypes() {
    return this.typeService.getAll();
  }
}
