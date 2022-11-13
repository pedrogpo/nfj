import { decode, sign, verify } from 'jsonwebtoken'
import { injectable } from 'tsyringe'

interface JWTPayload {
  id: string
  email: string
}
@injectable()
export class JWTService {
  private readonly secret: string = process.env.SECRET_AUTH!

  sign(payload: JWTPayload) {
    return sign(
      {
        id: payload.id,
        email: payload.email,
      },
      this.secret,
      {
        subject: payload.id,
        expiresIn: '1d',
      }
    )
  }

  verify(token: string) {
    return verify(token, this.secret)
  }

  decode(token: string) {
    return decode(token)
  }
}
