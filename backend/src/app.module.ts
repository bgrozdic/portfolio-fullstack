import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExperienceModule } from './experience/experience.module';
import { ConfigModule } from '@nestjs/config';
import { AboutModule } from './about/about.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    PrismaModule,
    ExperienceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AboutModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
