export interface IUser {
  name: string
  email: string
}

export interface ICreateUser {
  email: string
  name: string
  password: string
  confirmPassword: string
}
