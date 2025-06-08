import { IUser } from 'src/user/domain/interfaces/user.interface';

export interface IUpdateUserUseCaseInput extends Partial<IUser> {}
