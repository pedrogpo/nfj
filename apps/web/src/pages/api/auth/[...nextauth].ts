import NextAuth, { NextAuthOptions } from 'next-auth'
import { getProviderToken, login } from '~/network/authentication'
import { providers } from './_providers'

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET_AUTH!,
  session: {
    strategy: 'jwt',
  },
  providers: providers,
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account.provider !== 'login' && account.provider !== 'register') {
          const session = await getProviderToken(
            user.email,
            user.name,
            user.avatar,
            account.provider
          )
          user.accessToken = session.accessToken
        }

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
