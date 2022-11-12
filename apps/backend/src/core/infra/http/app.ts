import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { userRoutes } from './routes/user.routes'
import Youch from 'youch'

const app = express()

app.use(express.json())

app.use(userRoutes)

app.get('/', (req, res) => {
  throw new Error('There is an error!')
})

app.use(
  async (
    err: any,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (process.env.NODE_ENV === 'development') {
      const errors = await new Youch(err, request).toJSON()
      return response.status(500).json(errors)
    }

    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  }
)

export { app }
