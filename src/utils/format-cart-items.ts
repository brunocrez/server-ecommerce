import { ICartItem } from '../interfaces/cart-item.interface'

export function formatCartItems(cartItems: ICartItem[]) {
  let totalItems = 0,
    totalPrice = 0,
    totalFreight = 0

  const items = cartItems.map((item) => {
    totalItems += item.quantity
    totalPrice += item.quantity * item.Product.finalPrice
    totalFreight += item.freight

    return {
      ...item,
      Product: undefined,
      product: { ...item.Product },
    }
  })

  const total = totalPrice + totalFreight
  return { totalItems, totalPrice, items, totalFreight, total }
}
