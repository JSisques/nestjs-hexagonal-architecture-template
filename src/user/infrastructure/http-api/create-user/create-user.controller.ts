import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserHttpDto } from './create-user.http-dto';
import { CreateUserUseCase } from 'src/user/application/create-user-use-case/create-user-use-case';
import { User } from 'src/user/domain/entities/user.entity';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(
    @Body() createUserHttpDto: CreateUserHttpDto,
  ): Promise<User> {
    return this.createUserUseCase.execute({
      email: createUserHttpDto.email,
    });
  }
}
