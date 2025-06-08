import { IUser } from '../interfaces/user.interface';

export class User {
  constructor(private readonly user: IUser) {}

  static create(user: IUser): User {
    return new User(user);
  }

  static fromPrimitve(user: IUser): User {
    return new User(user);
  }

  toPrimitve(): IUser {
    return this.user;
  }
}
