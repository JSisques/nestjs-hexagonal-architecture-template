import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserHttpDto } from './update-user.http-dto';
import { UpdateUserUseCase } from 'src/user/application/update-user-use-case/update-user-use-case';
import { User } from 'src/user/domain/entities/user.entity';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  @Put(':id')
  async updateUser(
    @Body() updateUserHttpDto: UpdateUserHttpDto,
  ): Promise<User> {
    return this.updateUserUseCase.execute({
      id: updateUserHttpDto.id,
      email: updateUserHttpDto.email,
    });
  }
}
