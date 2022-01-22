import authentication from '@config/authentication'
import AppError from '@shared/errors/AppError'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import User from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/UsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepo = getCustomRepository(UsersRepository)
    const user = await usersRepo
      .createQueryBuilder('user')
      .where({ email })
      .addSelect('user.password')
      .getOne()

    if (!user) {
      throw new AppError('Invalid email or password', 401)
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new AppError('Invalid email or password', 401)
    }

    const token = sign({}, authentication.jwt.secret, {
      subject: user.id,
      expiresIn: authentication.jwt.expiresIn,
    })

    return { user, token }
  }
}

export default CreateSessionService
