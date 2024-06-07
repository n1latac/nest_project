import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeDTO } from './type.dto';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post('create')
  createType(@Body() data: CreateTypeDTO) {
    return this.typeService.createType(data);
  }

  @Get('all')
  getAllTypes() {
    return this.typeService.getAll();
  }
}
