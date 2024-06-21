import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.API_GATEWAI_PORT || 3030;
  await app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
}
bootstrap();
