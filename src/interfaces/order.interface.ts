import { IUser } from './user.interface'

export interface IFreight {
  name: string
  price: number
  deadline: number
}
export interface IProductItem {
  productId: string
  quantity: number
  freight: number
}

export interface ICreateOrderRequest {
  items: IProductItem[]
  user: IUser
}
