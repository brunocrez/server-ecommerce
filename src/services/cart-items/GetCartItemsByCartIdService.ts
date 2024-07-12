import { prisma } from '../../database/prisma-client'

export class GetCartItemsByCartIdService {
  async execute(cartId: string) {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: { Product: { include: { images: true } } },
      orderBy: { createdAt: 'desc' },
    })
  }
}
