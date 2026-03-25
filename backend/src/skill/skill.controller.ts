import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('api/skill')
export class SkillController {
  constructor(private readonly service: SkillService) {}

  @Get()
  getAll() {
    return this.service.skills({});
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.skill({ id });
  }

  @Post()
  create(@Body() data: any) {
    return this.service.createSkill(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.updateSkill({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteSkill({ id });
  }
}
