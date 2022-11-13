import { Router } from 'express'
import UserController from '~/modules/user/controller'
import { RegisterUserSchema } from '~/modules/authentication/validations/register-validate'
import { validateMiddleware } from '../middleware/validate'

const routes = Router()

const userController = new UserController()

routes.get('/user', (req, res) => userController.getAll(req, res))

export { routes as userRoutes }
