import Database, { UserRequestDto, IUser } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public readonly db = Database

  createUser(userName: UserRequestDto) {
    return this.db.create(userName)
  }
}
