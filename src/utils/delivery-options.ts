import { getFreight } from './get-freight'
import { randomNumber } from './random-number'

export const deliveryOptions = (price: number) => [
  {
    name: 'Simple Delivery',
    price: getFreight(price),
  },
  {
    name: 'Fast Delivery',
    price: getFreight(price) + randomNumber(6, 9),
  },
]
