import { IUserRepository } from 'src/user/domain/repositories/user.repository';
import { IUser } from 'src/user/domain/interfaces/user.interface';
import { User } from 'src/user/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryUserRepository implements IUserRepository {
  private users: IUser[] = [];

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ? User.fromPrimitve(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user ? User.fromPrimitve(user) : null;
  }

  async create(user: User): Promise<User> {
    this.users.push(user.toPrimitve());
    return user;
  }

  async update(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.id === user.toPrimitve().id);
    this.users[index] = user.toPrimitve();
    return user;
  }

  async delete(id: string): Promise<User> {
    const index = this.users.findIndex((u) => u.id === id);
    const user = this.users[index];
    this.users.splice(index, 1);
    return User.fromPrimitve(user);
  }
}
