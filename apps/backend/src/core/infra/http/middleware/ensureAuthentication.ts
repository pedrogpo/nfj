import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { JWTService } from '~/core/services/jwt'
import { container } from 'tsyringe'

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
    const jwtService = container.resolve(JWTService)

    const { sub: user_id } = jwtService.verify(token) as IPayload

    req.client_id = user_id

    next()
  } catch {
    throw new Error('Invalid JWT token')
  }
}

interface IPayload {
  sub: string
}
