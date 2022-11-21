import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { userRoutes } from './routes/user.routes'
import Youch from 'youch'
import { authenticationRoutes } from './routes/authentication.routes'
import { handleErrors } from './middleware/handleErrors'
import { ensureAuthentication } from './middleware/ensureAuthentication'

const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  // Pass to next layer of middleware
  next()
})
app.use(userRoutes)
app.use(authenticationRoutes)

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello Error' })
})
app.use(ensureAuthentication)

app.use(handleErrors)

export { app }
