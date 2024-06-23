import { OrderItemType } from '../interfaces/order-item.interface'

export function getOrderValues(items: OrderItemType[]) {
  const result = items.reduce(
    (acc, curr) => {
      acc.sumPrice += curr.price
      acc.sumFreight += curr.freight
      return acc
    },
    { sumPrice: 0, sumFreight: 0 },
  )

  const total = result.sumFreight + result.sumPrice

  return { total, ...result }
}
