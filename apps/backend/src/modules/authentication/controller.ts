import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticationService } from './service'

export default class AuthenticationController {
  private readonly authenticationService = container.resolve(
    AuthenticationService
  )

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    const session = await this.authenticationService.login({
      email,
      password,
    })
    return res.status(200).json(session)
  }

  async register(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body
    const user = await this.authenticationService.register({
      name,
      email,
      password,
      confirmPassword,
    })
    return res.status(201).json(user)
  }
  async getToken(req: Request, res: Response) {
    const { email, name, avatar, provider } = req.body
    const session = await this.authenticationService.getToken({
      email,
      name,
      avatar,
      provider,
    })
    return res.status(200).json(session)
  }
}
