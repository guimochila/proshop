import { Router } from 'express'
import { celebrate, Segments } from 'celebrate'
import UsersController from '../controllers/UsersController'
import Joi from 'joi'

const usersRouter = Router()
const usersCtrl = new UsersController()

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean(),
    },
  }),
  usersCtrl.create,
)

export default usersRouter
