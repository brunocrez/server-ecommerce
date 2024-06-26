import { OrderItemType } from '../interfaces/order-item.interface'
import { IProductItem } from '../interfaces/order.interface'
import { ProductType } from '../interfaces/product.interface'

export function createOrder(
  products: ProductType[],
  items: IProductItem[],
): OrderItemType[] {
  const map = new Map()

  items.forEach((item) => {
    map.set(item.productId, { ...item, freight: item.freight.price })
  })

  products.forEach((product) => {
    const data = {
      ...map.get(product.id),
      price: product.finalPrice,
    }
    map.set(product.id, data)
  })

  return Array.from(map.values())
}
