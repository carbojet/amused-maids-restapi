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
    .setTitle('Amused Maids')
    .setDescription('The Amused Maids REST-API')
    .setVersion('1.0')
    .addTag('Maids for Every Reason and Occation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('restapi', app, document);
  //Swagger End

  await app.listen(3000);
}
bootstrap();
