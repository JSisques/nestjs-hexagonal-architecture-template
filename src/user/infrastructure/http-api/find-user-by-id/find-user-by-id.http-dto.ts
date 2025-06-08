import { IsUUID } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class FindUserByIdHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
