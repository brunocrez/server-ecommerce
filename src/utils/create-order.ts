import { OrderItemType } from '../interfaces/order-item.interface'
import { ProductType } from '../interfaces/product.interface'
import { getFreight } from './get-freight'

export function createOrder(items: ProductType[]): OrderItemType[] {
  return items.map((item) => ({
    productId: item.id,
    freight: getFreight(item.finalPrice),
    price: item.finalPrice,
    quantity: 1,
  }))
}
