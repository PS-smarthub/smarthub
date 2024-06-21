import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOrderWorkshop } from './typeorm/entities/ServiceOrderWorkshop';
import { ConfigModule } from '@nestjs/config';
import { ServiceOrderModule } from './service-order/service-order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'service-order-ms-db',
      port: 3306,
      database: 'service-order',
      entities: [ServiceOrderWorkshop],
      synchronize: true,
      username: process.env.SERVICE_ORDER_MS_DB_USERNAME,
      password: process.env.SERVICE_ORDER_MS_DB_PASSWORD,
    }),
    ServiceOrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
