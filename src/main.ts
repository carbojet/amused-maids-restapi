import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Payload Validator Global
  app.useGlobalPipes(new ValidationPipe());
  //Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Prajasram')
    .setDescription('The Prajasram REST API description')
    .setVersion('1.0')
    .addTag('Prajasram')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //Swagger End

  await app.listen(3000);
}
bootstrap();
