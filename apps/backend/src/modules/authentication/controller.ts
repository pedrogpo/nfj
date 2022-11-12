import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticationService } from './service'

export default class AuthenticationController {
  private readonly AuthenticationService = container.resolve(
    AuthenticationService
  )

  async create(req: Request, res: Response) {
    const { email, password } = req.body
    const token = await this.AuthenticationService.create({
      email,
      password,
    })
    return res.status(200).json(token)
  }
}
