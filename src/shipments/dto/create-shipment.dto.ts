import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShipment {
  @IsString()
  @IsNotEmpty()
  unique_order_number: string;
}
