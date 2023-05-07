import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Biz
import { CatsController } from './controllers/cats.controller';
import { UserController } from './controllers/user.controller';

// Services
import {PrismaService} from './services/PrismaService';

@Module({
  imports: [],
  controllers: [AppController, CatsController, UserController],
  providers: [PrismaService],
})
export class AppModule {}
