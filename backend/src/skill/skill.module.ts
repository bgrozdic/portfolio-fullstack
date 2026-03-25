import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';

@Module({
  providers: [SkillService, PrismaService],
  controllers: [SkillController],
})
export class SkillModule {}
