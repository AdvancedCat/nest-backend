import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from '@app/services/PrismaService';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PrismaService],
})
export class PostModule {}
