import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Skill } from 'generated/prisma/client';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async skill(where: Prisma.SkillWhereUniqueInput): Promise<Skill | null> {
    return this.prisma.skill.findUnique({ where });
  }

  async skills(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SkillWhereUniqueInput;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput;
  }): Promise<Skill[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.skill.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy: orderBy ?? { orderIndex: 'asc' },
    });
  }

  async createSkill(data: Prisma.SkillCreateInput): Promise<Skill> {
    return this.prisma.skill.create({ data });
  }

  async updateSkill(params: {
    where: Prisma.SkillWhereUniqueInput;
    data: Prisma.SkillUpdateInput;
  }): Promise<Skill> {
    const { where, data } = params;

    return this.prisma.skill.update({
      where,
      data,
    });
  }

  async deleteSkill(where: Prisma.SkillWhereUniqueInput): Promise<Skill> {
    return this.prisma.skill.delete({ where });
  }
}
