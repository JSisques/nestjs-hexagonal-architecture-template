import { Controller, Delete, Param } from '@nestjs/common';
import { User } from 'src/user/domain/entities/user.entity';
import { DeleteUserUseCase } from 'src/user/application/delete-user-use-case/delete-user-use-case';
import { DeleteUserHttpDto } from './delete-user.http-dto';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  @Delete(':id')
  async deleteUser(
    @Param() deleteUserHttpDto: DeleteUserHttpDto,
  ): Promise<User> {
    return this.deleteUserUseCase.execute({ id: deleteUserHttpDto.id });
  }
}
