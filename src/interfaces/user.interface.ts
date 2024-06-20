export interface ICreateUser {
  name: string
  email: string
  password: string
  phone?: string
}

export interface IUser {
  name: string
  email: string
  userId: string
}
