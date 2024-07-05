import { prisma } from '../../database/prisma-client'

export class CreateCartItemsService {
  async execute(cartId: string, productId: string, quantity: number) {
    const data = { cartId, productId, quantity }
    return await prisma.cartItem.create({ data })
  }
}
