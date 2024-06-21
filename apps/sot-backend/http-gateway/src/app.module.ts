import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { ServiceOrderModule } from './service-order/service-order.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NatsClientModule,
    ServiceOrderModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
