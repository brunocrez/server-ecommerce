import { IUser } from './user.interface'

export interface IProductItem {
  productId: string
  quantity: number
}

export interface ICreateOrderRequest {
  items: IProductItem[]
  user: IUser
}
