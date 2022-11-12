import { Router } from 'express'
import UserController from '~/modules/user/controller'
import { createUserSchema } from '~/modules/user/validations/create-user-validate'
import { validateMiddleware } from '../middleware/validate'

const routes = Router()

const userController = new UserController()

routes.get('/user', (req, res) => userController.getAll(req, res))

routes.post('/user', validateMiddleware(createUserSchema), (req, res) =>
  userController.create(req, res)
)

export { routes as userRoutes }
