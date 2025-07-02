import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Название API')
    .setDescription('Описание API')
    .setVersion('1.0')
    .addBearerAuth() // если используется JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger доступен по /api

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3333);
}
bootstrap();
