export const randomNumber = (min: number, max: number) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2))
