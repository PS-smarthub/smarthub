import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MaterialModule } from './material/material.module';
import { Material } from './material/entities/material.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'material-ms-db',
      port: 3307,
      database: 'material',
      entities: [Material],
      synchronize: true,
      username: 'root',
      password: 'root',
    }),
    MaterialModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
