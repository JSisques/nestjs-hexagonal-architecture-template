import { Module } from '@nestjs/common';
import { CreateUserController } from './http-api/create-user/create-user.controller';
import { CreateUserUseCase } from '../application/create-user-use-case/create-user-use-case';
import { InMemoryUserRepository } from './repositories/in-memory.repository';
import { IUserRepository } from '../domain/repositories/user.repository';
import { UpdateUserUseCase } from '../application/update-user-use-case/update-user-use-case';
import { UpdateUserController } from './http-api/update-user/update-user.controller';

@Module({
  imports: [],
  providers: [
    CreateUserUseCase,
    UpdateUserUseCase,
    InMemoryUserRepository,
    {
      provide: IUserRepository,
      useExisting: InMemoryUserRepository,
    },
  ],
  controllers: [CreateUserController, UpdateUserController],
  exports: [CreateUserUseCase, UpdateUserUseCase],
})
export class UserModule {}
