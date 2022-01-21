import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import User from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/UsersRepository'

interface IRequest {
  id: string
}

class GetUserProfileService {
  public async execute({ id }: IRequest): Promise<User> {
    const usersRepo = getCustomRepository(UsersRepository)
    const user = await usersRepo.findById(id)

    if (!user) {
      throw new AppError('User profile not found', 404)
    }

    return user
  }
}

export default GetUserProfileService
