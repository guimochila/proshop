import { getCustomRepository } from 'typeorm'
import User from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/UsersRepository'

class ListUsersService {
  public async execute(): Promise<User[]> {
    const usersRepo = getCustomRepository(UsersRepository)
    const users = await usersRepo.find()

    return users
  }
}

export default ListUsersService
