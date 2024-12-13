import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FlowersCreateDto } from './flowers.dto';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Flower[]> {
    return await this.prisma.flower.findMany();
  }

  create(dto: FlowersCreateDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
