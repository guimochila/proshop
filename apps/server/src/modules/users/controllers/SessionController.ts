import { Request, Response } from 'express'
import CreateSessionService from '../services/CreateSessionService'

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const createSession = new CreateSessionService()

    const user = await createSession.execute({ email, password })

    return res.json(user)
  }
}

export default SessionController
