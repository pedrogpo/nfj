import { Router } from 'express'
import AuthenticationController from '~/modules/authentication/controller'
import { RegisterUserSchema } from '~/modules/authentication/validations/register-validate'
import { validateMiddleware } from '../middleware/validate'

const routes = Router()

const authenticationController = new AuthenticationController()

routes.post('/login', (req, res) => authenticationController.login(req, res))

routes.post('/register', validateMiddleware(RegisterUserSchema), (req, res) =>
  authenticationController.register(req, res)
)

routes.post('/getToken', (req, res) =>
  authenticationController.getToken(req, res)
)
export { routes as authenticationRoutes }
