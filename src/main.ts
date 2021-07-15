import {
  NestFactory
} from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  AppModule
} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Heroes REST API')
    .setDescription('Rest API for Heroes.')
    .setVersion('0.0.1')
    .addTag('heroes-micro-service-0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8081);
}
bootstrap();
