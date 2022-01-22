import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionRouter = Router()
const sessionCtrl = new SessionController()

sessionRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionCtrl.create,
)

export default sessionRouter
