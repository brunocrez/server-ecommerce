import { prisma } from '../../database/prisma-client'

export class CreateCartItemService {
  async execute(
    cartId: string,
    productId: string,
    quantity: number,
    freight: number,
  ) {
    const data = { cartId, productId, quantity, freight }
    return await prisma.cartItem.create({ data })
  }
}
