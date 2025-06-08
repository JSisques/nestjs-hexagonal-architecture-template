export class UserNotFoundByEmailException extends Error {
  constructor(public readonly email: string) {
    super(`User not found with email ${email}`);
  }
}
