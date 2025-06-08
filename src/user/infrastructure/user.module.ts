import { Module } from '@nestjs/common';
import { CreateUserController } from './http-api/create-user/create-user.controller';
import { CreateUserUseCase } from '../application/create-user-use-case/create-user-use-case';
import { InMemoryUserRepository } from './repositories/in-memory.repository';
import { IUserRepository } from '../domain/repositories/user.repository';

@Module({
  imports: [],
  providers: [
    CreateUserUseCase,
    InMemoryUserRepository,
    {
      provide: IUserRepository,
      useExisting: InMemoryUserRepository,
    },
  ],
  controllers: [CreateUserController],
  exports: [CreateUserUseCase],
})
export class UserModule {}
