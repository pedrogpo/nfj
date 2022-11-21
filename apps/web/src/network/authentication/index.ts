import { getRequest, postRequest } from '~/core/http/api'

interface ISession {
  accessToken: string
  expiresIn: number
  user: {
    id: string
    name: string
    email: string
  }
}

export async function login(email: string, password: string) {
  const { data } = await postRequest<ISession>('/login', { email, password })
  return data
}

export async function getProviderToken(
  email: string,
  name: string,
  avatar: string,
  provider: string
) {
  const { data } = await postRequest<ISession>('/getToken', {
    email: email,
    name: name,
    avatar: avatar,
    provider: provider,
  })
  return data
}

export async function register(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  console.log('pimbando')
  const { data } = await postRequest<ISession>('/register', {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  })
  return data
}

export async function getMethod(): Promise<String> {
  const { data } = await getRequest<String>('/')
  return data
}
