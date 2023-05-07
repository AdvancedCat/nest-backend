import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Biz
import { UserModule } from '@app/modules/user/user.module';
import { PostModule } from '@app/modules/post/post.module';

// Services

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
