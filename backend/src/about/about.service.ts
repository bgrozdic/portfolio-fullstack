import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { About, Prisma } from '@prisma/client';

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  async about(): Promise<About | null> {
    return this.prisma.about.findFirst();
  }

  async upsertAbout(data: Prisma.AboutCreateInput): Promise<About> {
    const existing = await this.prisma.about.findFirst();

    if (existing) {
      return this.prisma.about.update({
        where: { id: existing.id },
        data,
      });
    }

    return this.prisma.about.create({ data });
  }
}
