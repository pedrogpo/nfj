import { PrismaClient } from '@prisma/client'
import { inject, injectable, Lifecycle, scoped } from 'tsyringe'
import { compare } from 'bcrypt'
import { readFileSync } from 'fs'
import { sign } from 'jsonwebtoken'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class AuthenticationService {
  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient) {}

  async create({ email, password }: IAuthenticateUser) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (!user) {
      throw new Error('User or password does not match')
    }

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('User or password does not match')
    }

    const token = sign({ email }, process.env.SECRET_AUTH!, {
      subject: String(user.id),
      expiresIn: '1d',
    })

    return { token }
  }
}
