import { Router } from 'express'
import AuthenticationController from '~/modules/authentication/controller'
import { createUserSchema } from '~/modules/user/validations/create-user-validate'
import { validateMiddleware } from '../middleware/validate'

const routes = Router()

const authenticationController = new AuthenticationController()

routes.post('/login', (req, res) => authenticationController.create(req, res))

export { routes as authenticationRoutes }
