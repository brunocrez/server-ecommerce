export const OrderStatus = {
  CREATED: 'CREATED',
  ACCEPTED: 'ACCEPTED',
}

type OrderStatusKeys = keyof typeof OrderStatus

export function isValidKey(key: string): key is OrderStatusKeys {
  return key in OrderStatus
}
