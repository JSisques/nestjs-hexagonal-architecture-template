import { User } from 'src/user/domain/entities/user.entity';
import { ICreateUserUseCaseInput } from './create-user-use-case.dto';
import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: ICreateUserUseCaseInput): Promise<User> {
    const user = User.create({
      id: uuidv4(),
      email: input.email,
    });

    return await this.userRepository.create(user);
  }
}
