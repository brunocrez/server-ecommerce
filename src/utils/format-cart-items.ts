import { ICartItem } from '../interfaces/cart-item.interface'
import { getFreight } from './get-freight'

export function formatCartItems(cartItems: ICartItem[]) {
  let totalItems = 0,
    totalPrice = 0,
    itemsPrice = 0

  const items = cartItems.map((item) => {
    totalItems += item.quantity
    totalPrice += item.quantity * item.Product.finalPrice
    itemsPrice += item.Product.finalPrice

    return {
      ...item,
      Product: undefined,
      product: { ...item.Product },
    }
  })

  const averagePrice = itemsPrice / items.length
  const totalFreight = getFreight(averagePrice)
  const total = totalPrice + totalFreight
  return { totalItems, totalPrice, items, totalFreight, total }
}
