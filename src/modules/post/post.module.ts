import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PrismaService],
})
export class PostModule {}
