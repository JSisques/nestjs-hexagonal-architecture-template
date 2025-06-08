export class UserNotFoundByIdException extends Error {
  constructor(public readonly id: string) {
    super(`User not found with id ${id}`);
  }
}
