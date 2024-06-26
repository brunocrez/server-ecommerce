import { getFreight } from './get-freight'
import { randomNumber } from './random-number'

export const deliveryOptions = (price: number) => [
  {
    name: 'Simple Delivery',
    price: getFreight(price),
    deadline: Math.floor(randomNumber(6, 12)),
  },
  {
    name: 'Fast Delivery',
    price: getFreight(price) + randomNumber(6, 9),
    deadline: Math.floor(randomNumber(2, 4)),
  },
]

export const freeDeliveryOption = () => [
  {
    name: 'Frete Grátis',
    price: 0,
    deadline: Math.floor(randomNumber(5, 8)),
  },
]
