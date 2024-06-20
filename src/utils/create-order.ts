import { OrderItemType } from '../interfaces/order-item.interface'
import { IProductItem } from '../interfaces/order.interface'
import { getFreight } from './get-freight'

export function createOrder(items: IProductItem[]): OrderItemType[] {
  return items.map((item) => ({ ...item, freight: getFreight(item.price) }))
}
