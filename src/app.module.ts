import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Shipment } from './shipments/shipments.entity';
import { Charge } from './charge/charge.entity';
import { ChargeModule } from './charge/charge.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Shipment, Charge],
      synchronize: false,
    }),
    ShipmentsModule,
    ChargeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
