import { User } from 'src/user/domain/entities/user.entity';
import { IUpdateUserUseCaseInput } from './update-user-use-case.dto';

import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserNotFoundByIdException } from 'src/user/domain/exceptions/user-not-found-by-id.exception';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IUpdateUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.findById(input.id);
    if (!user) {
      throw new UserNotFoundByIdException(input.id);
    }
    return this.userRepository.update(user);
  }
}
