import { IsEmail } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class FindUserByEmailHttpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
