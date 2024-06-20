const randomNumber = (min: number, max: number) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2))

export function getFreight(price: number) {
  if (price < 59.99) {
    return randomNumber(25, 45)
  }

  if (price < 129.99) {
    return randomNumber(25, 35)
  }

  if (price < 599.99) {
    return randomNumber(20, 25)
  }

  if (price < 999.99) {
    return randomNumber(15, 20)
  }

  if (price < 1599.99) {
    return randomNumber(10, 15)
  }

  return 0
}
