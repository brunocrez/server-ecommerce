export interface ICreateOrderItem {
  orderId: string
  productId: string
  quantity: number
  price: number
  freight: number
}

export type OrderItemType = Omit<ICreateOrderItem, 'orderId'>
