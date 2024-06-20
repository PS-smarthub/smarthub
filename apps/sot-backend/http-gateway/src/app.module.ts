import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { ServiceOrderModule } from './service-order/service-order.module';


@Module({
  imports: [
    NatsClientModule,
    ServiceOrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
