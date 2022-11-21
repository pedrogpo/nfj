import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login, register } from '~/network/authentication'

export const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_ID,
  }),
  CredentialsProvider({
    name: 'login',
    id: 'login',
    credentials: {},
    async authorize(credentials, req) {
      const { email, password } = credentials as {
        email: string
        password: string
      }

      try {
        const session = await login(email, password)
        return {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          accessToken: session.accessToken,
          expiresIn: session.expiresIn,
          avatar: '',
        }
      } catch (err) {
        throw err
      }
    },
  }),
  CredentialsProvider({
    name: 'register',
    id: 'register',
    credentials: {},
    async authorize(credentials, req) {
      console.log('bateu?')
      const { name, email, password, confirmPassword } = credentials as {
        name: string
        email: string
        password: string
        confirmPassword: string
      }

      try {
        const session = await register(name, email, password, confirmPassword)
        return {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          accessToken: session.accessToken,
          expiresIn: session.expiresIn,
          avatar: '',
        }
      } catch (err) {
        console.log(err)
        throw err
      }
    },
  }),
]
