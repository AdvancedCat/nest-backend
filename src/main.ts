import { NestFactory, HttpAdapterHost, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { AppModule } from './app.module';
import { APP } from './app.config';
import {PrismaClientExceptionFilter} from './filters/prisma-client-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true })) // whitelist: true - remove all properties that are not in the DTO
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  // config for swagger
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('Median API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(APP.PORT);
}

bootstrap();
