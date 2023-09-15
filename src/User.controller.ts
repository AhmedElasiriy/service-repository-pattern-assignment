import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {
  public userService = new UserService()
  store(userData: UserRequestDto) {
    return this.userService.createUser(userData)
  }
}
