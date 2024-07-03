import {
  ICreateOrderItem,
  OrderItemType,
} from '../interfaces/order-item.interface'

export function createOrdemItemsData(
  items: OrderItemType[],
  orderId: string,
): ICreateOrderItem[] {
  return items.map((item) => ({ ...item, orderId }))
}
