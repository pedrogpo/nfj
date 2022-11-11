import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET_NEXT_AUTH,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true
    },
    async session({ session, user, token }) {
      console.log({
        token_session: token,
      })

      let newSession = {
        ...session,
      }

      return newSession
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        console.log({
          token,
          account,
          profile,
        })
      }

      console.log({
        account_JWT: account,
      })

      token.abobrinha = 'adsads'
      return token
    },
  },
}

export default NextAuth(authOptions)
