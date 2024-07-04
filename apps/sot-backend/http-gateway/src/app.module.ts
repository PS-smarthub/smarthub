import { MiddlewareConsumer, Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { ServiceOrderModule } from './service-order/service-order.module';
import { ConfigModule } from '@nestjs/config';
import { MaterialModule } from './material/material.module';
import { AzureEntraIdMiddleware } from './middlewares/AzureEntraId.middleware';

@Module({
  imports: [
    NatsClientModule,
    ServiceOrderModule,
    MaterialModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AzureEntraIdMiddleware).forRoutes('*');
  // }
}
