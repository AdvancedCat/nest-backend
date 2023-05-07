import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Database
import {PrismaModule} from './modules/prisma/prisma.module'

// Biz
// import { UserModule } from './modules/user/user.module';
// import { PostModule } from './modules/post/post.module';
import { ArticlesModule } from './modules/articles/articles.module';

// Services

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
