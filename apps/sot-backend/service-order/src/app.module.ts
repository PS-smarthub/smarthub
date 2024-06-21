import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WorkshopModule } from './workshop/workshop.module';
import { ServiceOrderWorkshop } from './workshop/infra/typeorm/ServiceOrderWorkshop';
import { EquipmentOrmEntity } from './lei/infrastructure/typeorm/equipment.orm-entity';
import { LeiModule } from './lei/lei.module';

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
      entities: [
        ServiceOrderWorkshop,
        EquipmentOrmEntity
      ],
      synchronize: true,
      username: process.env.SERVICE_ORDER_MS_DB_USERNAME,
      password: process.env.SERVICE_ORDER_MS_DB_PASSWORD,
    }),
    WorkshopModule,
    LeiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
