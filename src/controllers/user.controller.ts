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
import { User as UserModel, Post as PostModel, Prisma } from '@prisma/client';
import { PrismaService } from '../services/PrismaService';

@Controller('user')
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('')
  async getAllUsers(): Promise<UserModel[]> {
    return this.prismaService.user.findMany();
  }
}
