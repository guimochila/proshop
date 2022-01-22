import AppError from '@shared/errors/AppError'
import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../typeorm/repositories/UsersRepository'

interface IRequest {
  name: string
  email: string
  password: string
  isAdmin?: boolean
}

class CreateUserService {
  public async execute({ name, email, password, isAdmin }: IRequest) {
    const usersRepo = getCustomRepository(UsersRepository)
    const isEmailExists = await usersRepo.findByEmail(email)

    if (isEmailExists) {
      throw new AppError('Email is already registered.')
    }

    const hashedPassword = await hash(password, 10)

    const user = usersRepo.create({
      name,
      email,
      password: hashedPassword,
      is_admin: isAdmin,
    })

    await usersRepo.save(user)

    return { ...user, password: undefined }
  }
}

export default CreateUserService
