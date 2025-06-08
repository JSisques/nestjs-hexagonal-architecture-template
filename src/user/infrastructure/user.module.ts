import { Module } from '@nestjs/common';
import { CreateUserController } from './http-api/create-user/create-user.controller';
import { CreateUserUseCase } from '../application/create-user-use-case/create-user-use-case';
import { InMemoryUserRepository } from './repositories/in-memory.repository';
import { IUserRepository } from '../domain/repositories/user.repository';
import { UpdateUserUseCase } from '../application/update-user-use-case/update-user-use-case';
import { UpdateUserController } from './http-api/update-user/update-user.controller';
import { FindUserByIdUseCase } from '../application/find-user-by-id-use-case/find-user-by-id-use-case';
import { FindUserByEmailUseCase } from '../application/find-user-by-email-use-case/find-user-by-email-use-case';
import { DeleteUserUseCase } from '../application/delete-user-use-case/delete-user-use-case';
import { FindUserByIdController } from './http-api/find-user-by-id/find-user-by-id.controller';
import { FindUserByEmailController } from './http-api/find-user-by-email/find-user-by-email.controller';
import { DeleteUserController } from './http-api/delete-user/delete-user.controller';

@Module({
  imports: [],
  providers: [
    FindUserByIdUseCase,
    FindUserByEmailUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    InMemoryUserRepository,
    {
      provide: IUserRepository,
      useExisting: InMemoryUserRepository,
    },
  ],
  controllers: [
    CreateUserController,
    UpdateUserController,
    FindUserByIdController,
    FindUserByEmailController,
    DeleteUserController,
  ],
  exports: [
    CreateUserUseCase,
    UpdateUserUseCase,
    FindUserByIdUseCase,
    FindUserByEmailUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
