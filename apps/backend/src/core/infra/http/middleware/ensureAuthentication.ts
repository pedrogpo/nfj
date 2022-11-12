import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

export async function ensureAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('JWT token is missing')
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, process.env.SECRET_AUTH!) as IPayload

    req.client_id = user_id

    next()
  } catch {
    throw new Error('Invalid JWT token')
  }
}

interface IPayload {
  sub: string
}
