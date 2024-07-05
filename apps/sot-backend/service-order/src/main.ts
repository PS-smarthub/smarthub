import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const NATS_SERVER_URL = process.env.NATS_SERVER_URL;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [NATS_SERVER_URL],
      },
    },
  );
  await app.listen();
}
bootstrap();
