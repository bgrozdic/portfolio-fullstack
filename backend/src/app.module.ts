import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import { SkillModule } from './skill/skill.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [ExperienceModule, SkillModule, AboutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
