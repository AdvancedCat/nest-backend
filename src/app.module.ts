import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Database
import { PrismaModule } from './modules/prisma/prisma.module';

// Biz
import { ArticlesModule } from './modules/articles/articles.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

// Services

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
