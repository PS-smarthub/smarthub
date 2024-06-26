import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopController } from './workshop.controller';
import { WorkshopService } from './workshop.service';
import { ServiceOrderWorkshop } from './infra/typeorm/ServiceOrderWorkshop';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOrderWorkshop])],
  controllers: [WorkshopController],
  providers: [WorkshopService],
})
export class WorkshopModule {}
