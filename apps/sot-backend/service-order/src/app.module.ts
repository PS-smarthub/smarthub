import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WorkshopModule } from './workshop/workshop.module';
import { ServiceOrderWorkshop } from './workshop/infra/typeorm/ServiceOrderWorkshop';
import { LeiModule } from './lei/lei.module';
import { Vehicle } from './lei/vehicles/entities/vehicle.entity';
import { ProjectsModule } from './projects/projects.module';
import { Project } from './projects/entities/project.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'service-order-ms-db',
      port: Number(process.env.DB_PORT),
      database: 'service-order',
      entities: [ServiceOrderWorkshop, Vehicle, Project],
      synchronize: true,
      username: process.env.DB_USERNAME,
      password: 'root',
    }),
    WorkshopModule,
    LeiModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
