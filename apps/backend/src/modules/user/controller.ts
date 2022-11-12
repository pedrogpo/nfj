import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UserService } from './service'

export default class UserController {
  private readonly userService = container.resolve(UserService)

  async create(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body
    const user = await this.userService.create({
      name,
      email,
      password,
      confirmPassword,
    })
    return res.status(201).json(user)
  }

  async getAll(req: Request, res: Response) {
    const users = await this.userService.getAll()

    return res.json(users)
  }
}
