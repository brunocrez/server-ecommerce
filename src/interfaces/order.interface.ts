import { IUser } from './user.interface'

export interface IFreight {
  name: string
  price: number
  deadline: number
}
export interface IProductItem {
  productId: string
  quantity: number
  freight: IFreight
}

export interface ICreateOrderRequest {
  items: IProductItem[]
  user: IUser
}
