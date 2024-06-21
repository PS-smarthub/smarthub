import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { ServiceOrderController } from './service-order.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [ServiceOrderController],
  providers: [],
})
export class ServiceOrderModule {}
