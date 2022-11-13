import { PrismaClient } from '@prisma/client'
import { container, inject, injectable, Lifecycle, scoped } from 'tsyringe'
import { ICreateUser, IUser } from './models/user'

import { hash } from 'bcrypt'
import { JWTService } from '~/core/services/jwt'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class UserService {
  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient) {}

  async getAll(): Promise<IUser[]> {
    try {
      const users: IUser[] = await this.prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
        },
      })
      return users
    } catch (error) {
      throw error
    }
  }

  async updateUserAvatar(id: number, avatar: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })

    if (!user) {
      throw new Error('User does not exists')
    }

    const updatedUser = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        avatar,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    })

    return updatedUser
  }
}
