import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserHttpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
