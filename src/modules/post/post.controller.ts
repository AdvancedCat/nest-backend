import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { Post as PostModel, Prisma } from '@prisma/client';
import { PrismaService } from '@app/services/PrismaService';

@Controller('post')
export class PostController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('')
  async getAllUsers(): Promise<PostModel[]> {
    return this.prismaService.post.findMany();
  }
}
