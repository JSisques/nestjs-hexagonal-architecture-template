import { IUser } from 'src/user/domain/interfaces/user.interface';

export interface IDeleteUserUseCaseInput extends Pick<IUser, 'id'> {}
