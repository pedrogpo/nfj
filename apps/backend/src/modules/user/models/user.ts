export interface IUser {
  id: number
  name: string
  email: string
}

export interface ICreateUser {
  email: string
  name: string
  password: string
  confirmPassword: string
}
