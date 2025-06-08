import { User } from 'src/user/domain/entities/user.entity';
import { IDeleteUserUseCaseInput } from './delete-user-use-case.dto';

import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from 'src/user/domain/exceptions/user-not-found.exception';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IDeleteUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.delete(input.id);
    if (!user) {
      throw new UserNotFoundException(input.id);
    }
    return user;
  }
}
