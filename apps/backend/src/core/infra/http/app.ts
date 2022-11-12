import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { userRoutes } from './routes/user.routes'
import Youch from 'youch'
import { authenticationRoutes } from './routes/authentication.routes'
import { handleErrors } from './middleware/handleErrors'
import { ensureAuthentication } from './middleware/ensureAuthentication'

const app = express()

app.use(express.json())

app.use(userRoutes)
app.use(authenticationRoutes)

app.use(ensureAuthentication)

app.get('/', (req, res) => {
  const { client_id } = req
  return res.send(`Hello ${client_id}`)
})

app.use(handleErrors)

export { app }
