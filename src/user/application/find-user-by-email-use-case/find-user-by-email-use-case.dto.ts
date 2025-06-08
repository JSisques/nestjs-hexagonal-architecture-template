import { IUser } from 'src/user/domain/interfaces/user.interface';

export interface IFindUserByEmailUseCaseInput extends Pick<IUser, 'email'> {}
