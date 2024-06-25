import { randomNumber } from './random-number'

export function getFreight(price: number) {
  if (price < 59.99) {
    return randomNumber(35, 45)
  }

  if (price < 129.99) {
    return randomNumber(30, 35)
  }

  if (price < 599.99) {
    return randomNumber(25, 30)
  }

  if (price < 999.99) {
    return randomNumber(20, 25)
  }

  if (price < 1599.99) {
    return randomNumber(15, 20)
  }

  if (price < 1999.99) {
    return randomNumber(10, 15)
  }

  return 0
}
