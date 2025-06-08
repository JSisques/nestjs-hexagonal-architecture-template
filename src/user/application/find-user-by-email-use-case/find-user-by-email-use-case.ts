import { User } from 'src/user/domain/entities/user.entity';
import { IFindUserByEmailUseCaseInput } from './find-user-by-email-use-case.dto';

import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserNotFoundByEmailException } from 'src/user/domain/exceptions/user-not-found-by-email.exception';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IFindUserByEmailUseCaseInput): Promise<User> {
    const user = await this.userRepository.findByEmail(input.email);
    if (!user) {
      throw new UserNotFoundByEmailException(input.email);
    }
    return user;
  }
}
