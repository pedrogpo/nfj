interface IGetAuthentication {
  email: string
  name: string
  provider: string
  avatar?: string
}

enum Providers {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  EMAIL = 'email',
}
