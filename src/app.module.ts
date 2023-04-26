import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './shipments/shipments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'intechslpaws.czg95ktujwr4.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'intechslpaws',
      password: 'intechslpaws',
      database: 'eon_development',
      entities: [Shipment],
      synchronize: false,
    }),
    ShipmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
