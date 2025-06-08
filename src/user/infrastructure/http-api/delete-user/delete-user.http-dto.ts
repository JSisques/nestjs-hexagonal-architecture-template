import { IsUUID } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class DeleteUserHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
