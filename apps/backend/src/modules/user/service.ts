import { PrismaClient, User } from '@prisma/client'
import { inject, injectable, Lifecycle, scoped } from 'tsyringe'
import { ICreateUser, IUser } from './models/user'

import bcrypt from 'bcrypt'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class UserService {
  constructor(@inject('PrismaClient') private readonly prisma: PrismaClient) {}

  async getAll(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany()

      return users
    } catch (error) {
      throw error
    }
  }

  async create({
    name,
    password,
    email,
    confirmPassword,
  }: ICreateUser): Promise<IUser> {
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
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return user
  }
}
