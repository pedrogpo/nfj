import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { api } from '~/core/http/api'

interface IUser {
  accessToken: string
  expiresIn: number
  user: {
    id: string
    name: string
    email: string
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET_AUTH!,
  session: {
    strategy: 'jwt',
  },
  providers: [
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
          const { data: session } = await api.post<IUser>('/login', {
            email,
            password,
          })
          return {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            accessToken: session.accessToken,
            expiresIn: session.expiresIn,
            avatar: '',
          }
        } catch (err) {
          console.log(err.response.data)
          throw err
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const { data: session } = await api.post<IUser>('/getToken', {
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          provider: account.provider,
        })
        user.accessToken = session.accessToken

        return true
      } catch (err) {
        return false
      }
    },
    async session({ session, user, token }) {
      let newSession = {
        accessToken: token.accessToken,
        ...session,
      }

      return newSession
    },
    async jwt({ token, user, profile }) {
      if (user) {
        const { id, ...rest } = user
        return { ...rest, sub: id, exp: user.expiresIn }
      }
      return token
    },
  },
}

export default NextAuth(authOptions)
