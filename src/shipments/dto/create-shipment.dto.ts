import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShipment {
  @IsString()
  @IsNotEmpty()
  uniqueOrderNumber: string;
}
