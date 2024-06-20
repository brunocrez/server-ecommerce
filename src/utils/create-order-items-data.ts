import { OrderItemType } from '../interfaces/order-item.interface'

export function createOrdemItemsData(items: OrderItemType[], orderId: string) {
  return items.map((item) => ({ ...item, orderId }))
}
