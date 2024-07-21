import { ICreateProduct } from './product.interface'

export interface ICartItem {
  id: string
  cartId: string
  productId: string
  quantity: number
  Product: ICreateProduct
  freight: number
}
