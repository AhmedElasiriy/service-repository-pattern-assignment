import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {
  public userRepo = new UserRepository()
  createUser(userName: UserRequestDto) {
    return this.userRepo.createUser(userName)
  }
}
