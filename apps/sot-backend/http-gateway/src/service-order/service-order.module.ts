import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { ServiceOrderController } from './service-order.controller';
import { LeiModule } from './lei/lei.module';


@Module({
  imports: [NatsClientModule, LeiModule],
  controllers: [ServiceOrderController],
  providers: [],
})
export class ServiceOrderModule {}
