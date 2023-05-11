import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Database
import {PrismaModule} from './modules/prisma/prisma.module'

// Biz
import { ArticlesModule } from './modules/articles/articles.module';
import { UsersModule } from './modules/users/users.module';

// Services

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
