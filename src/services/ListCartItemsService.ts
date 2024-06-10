import { prisma } from '../database/prisma-client'

export class ListCartItemsService {
  async execute(cartId: string) {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: { Product: true },
    })
  }
}
