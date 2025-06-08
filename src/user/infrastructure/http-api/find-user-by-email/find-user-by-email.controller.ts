import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByEmailHttpDto } from './find-user-by-email.http-dto';
import { FindUserByEmailUseCase } from 'src/user/application/find-user-by-email-use-case/find-user-by-email-use-case';
import { User } from 'src/user/domain/entities/user.entity';

@Controller('users')
export class FindUserByEmailController {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}

  @Get('email')
  async findUserByEmail(
    @Param() findUserByEmailHttpDto: FindUserByEmailHttpDto,
  ): Promise<User> {
    return this.findUserByEmailUseCase.execute({
      email: findUserByEmailHttpDto.email,
    });
  }
}
