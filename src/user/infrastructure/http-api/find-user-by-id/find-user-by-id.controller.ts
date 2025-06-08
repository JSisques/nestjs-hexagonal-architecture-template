import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdUseCase } from 'src/user/application/find-user-by-id-use-case/find-user-by-id-use-case';
import { FindUserByIdHttpDto } from './find-user-by-id.http-dto';
import { User } from 'src/user/domain/entities/user.entity';

@Controller('users')
export class FindUserByIdController {
  constructor(private readonly findUserByIdUseCase: FindUserByIdUseCase) {}

  @Get(':id')
  async findUserById(
    @Param() findUserByIdHttpDto: FindUserByIdHttpDto,
  ): Promise<User> {
    return this.findUserByIdUseCase.execute({
      id: findUserByIdHttpDto.id,
    });
  }
}
