import { IUser } from 'src/user/domain/interfaces/user.interface';

export interface ICreateUserUseCaseInput extends Partial<IUser> {}
