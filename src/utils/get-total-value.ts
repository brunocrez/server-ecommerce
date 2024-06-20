import { OrderItemType } from '../interfaces/order-item.interface'

export function getTotalValue(items: OrderItemType[]) {
  return items.reduce((acc, curr) => acc + curr.price + curr.freight, 0)
}
