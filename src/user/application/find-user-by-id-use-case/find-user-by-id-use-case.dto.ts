import { IUser } from 'src/user/domain/interfaces/user.interface';

export interface IFindUserByIdUseCaseInput extends Pick<IUser, 'id'> {}
