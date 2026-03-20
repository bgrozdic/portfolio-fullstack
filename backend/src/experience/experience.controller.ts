import { Controller, Get } from '@nestjs/common';

@Controller('api/experience')
export class ExperienceController {
  @Get()
  test() {
    return { message: 'API works' };
  }
}
