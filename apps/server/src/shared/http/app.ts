import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import cors from 'cors'
import { errors } from 'celebrate'
import { httpLogger } from '../../utils/logger'
import routes from './routes'
import AppError from '@shared/errors/AppError'

const app = express()

app.use(httpLogger)
app.enable('trust proxy')
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (_, res) => {
  res.status(200).send()
})
app.head('/health', (_, res) => {
  res.status(200).send()
})

app.use('/api', routes)

/* Handling Errors */
app.use(errors())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  console.log(error.stack)

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

export default app
