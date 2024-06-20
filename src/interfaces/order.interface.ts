import { IUser } from './user.interface'

export interface IProductItem {
  productId: string
  quantity: number
  price: number
}

export interface ICreateOrderRequest {
  items: IProductItem[]
  user: IUser
}
