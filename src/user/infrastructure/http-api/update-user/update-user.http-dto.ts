import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateUserHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
