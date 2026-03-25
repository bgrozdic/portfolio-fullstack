import { Controller, Get, Put, Body } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('api/about')
export class AboutController {
  constructor(private readonly service: AboutService) {}

  @Get()
  get() {
    return this.service.about();
  }

  @Put()
  update(@Body() data: { content: string }) {
    return this.service.upsertAbout(data);
  }
}
