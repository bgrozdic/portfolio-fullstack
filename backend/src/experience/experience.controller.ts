import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('api/experience')
export class ExperienceController {
  constructor(private readonly service: ExperienceService) {}

  @Get()
  getAll() {
    return this.service.experiences({});
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.experience({ id });
  }

  @Post()
  create(@Body() data: any) {
    return this.service.createExperience(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.updateExperience({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteExperience({ id });
  }
}
