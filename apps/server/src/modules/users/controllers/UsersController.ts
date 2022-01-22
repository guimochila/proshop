import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'
import GetUserProfileService from '../services/GetUserProfileService'
import ListUsersService from '../services/ListUsersService'

class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsers = new ListUsersService()

    const users = await listUsers.execute()

    return res.json(users)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, isAdmin } = req.body
    const createUser = new CreateUserService()

    const user = await createUser.execute({ name, email, password, isAdmin })

    return res.status(201).json(user)
  }

  public async profile(req: Request, res: Response): Promise<Response> {
    const getUserProfile = new GetUserProfileService()

    const user = await getUserProfile.execute({ id: req.user.id })

    return res.json(user)
  }
}

export default UsersController
