import { PrismaClient } from '@prisma/client'
import { container, inject, injectable, Lifecycle, scoped } from 'tsyringe'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { JWTService } from '~/core/services/jwt'
import { ICreateUser } from '../user/models/user'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class AuthenticationService {
  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient) {}

  async login({ email, password }: IAuthenticateUser) {
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

    if (user.provider != 'server') {
      throw new Error(`Use your ${user.provider} account to login`)
    }

    const passwordMatch = await compare(password, user.password!)

    if (!passwordMatch) {
      throw new Error('User or password does not match')
    }
    const jwtService = container.resolve(JWTService)
    const accessToken = jwtService.sign({
      id: String(user.id),
      email: user.email,
    })

    return {
      accessToken,
      expiresIn: 1 * 24 * 60 * 60,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    }
  }

  async register({ name, password, email, confirmPassword }: ICreateUser) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (userExists) {
      throw new Error('User already exists')
    }

    if (password !== confirmPassword) {
      throw new Error('Password does not match')
    }
    // Hash password
    const hashedPassword = await hash(password, 10)

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
    const jwtService = container.resolve(JWTService)
    const token = jwtService.sign({
      id: String(user.id),
      email: user.email,
    })
    return {
      accessToken: token,
      user: user,
    }
  }

  async getToken({ name, email, avatar, provider }: IGetAuthentication) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })
    if (userExists) {
      if (userExists.provider !== provider) {
        throw new Error(`Use your ${provider} account to login`)
      }

      const jwtService = container.resolve(JWTService)
      const token = jwtService.sign({
        id: String(userExists.id),
        email: userExists.email,
      })

      return {
        accessToken: token,
        user: userExists,
      }
    }

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        avatar,
        provider,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    })
    const jwtService = container.resolve(JWTService)
    const token = jwtService.sign({
      id: String(user.id),
      email: user.email,
    })
    return {
      accessToken: token,
      user: user,
    }
  }
}
