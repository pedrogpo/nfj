import 'next-auth'
import { DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name: string
    avatar: string
    accessToken?: string
    expiresIn?: number
  }
}
