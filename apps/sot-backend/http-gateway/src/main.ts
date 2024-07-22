import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.API_GATEWAI_PORT || 3030;
  app.enableCors({
    origin: process.env.CLIENT_BASE_URL,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  });

  const config = new DocumentBuilder()
    .setTitle('Api Gateway')
    .setDescription('The gateway API description')
    .setVersion('1.0')
    .addTag('gateway')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
}
bootstrap();
