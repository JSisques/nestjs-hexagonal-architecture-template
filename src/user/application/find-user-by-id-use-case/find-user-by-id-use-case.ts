import { User } from 'src/user/domain/entities/user.entity';
import { IFindUserByIdUseCaseInput } from './find-user-by-id-use-case.dto';

import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserNotFoundByIdException } from 'src/user/domain/exceptions/user-not-found-by-id.exception';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IFindUserByIdUseCaseInput): Promise<User> {
    const user = await this.userRepository.findById(input.id);
    if (!user) {
      throw new UserNotFoundByIdException(input.id);
    }
    return user;
  }
}
