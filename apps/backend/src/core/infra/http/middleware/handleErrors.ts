import { NextFunction, Request, Response } from 'express'
import Youch from 'youch'

export async function handleErrors(
  err: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  // if (process.env.NODE_ENV === 'development') {
  //   const errors = await new Youch(err, request).toJSON()
  //   return response.status(500).json(errors)
  // }

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
