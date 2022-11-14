import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UserService } from './service'

export default class UserController {
  private readonly userService = container.resolve(UserService)

  async getAll(req: Request, res: Response) {
    const users = await this.userService.getAll()

    return res.json(users)
  }

  async updateUserAvatar(req: Request, res: Response) {
    const { client_id } = req
    const { avatar } = req.body
    const users = await this.userService.updateUserAvatar(
      Number(client_id),
      avatar
    )

    return res.json(users)
  }
}
