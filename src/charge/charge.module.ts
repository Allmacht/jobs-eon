import { Module } from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeController } from './charge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Charge } from './charge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Charge])],
  controllers: [ChargeController],
  providers: [ChargeService],
})
export class ChargeModule {}
