import { prisma } from '../../database/prisma-client'

export class GetCartItemByProductIdService {
  async execute(productId: string, cartId: string) {
    return await prisma.cartItem.findFirst({ where: { productId, cartId } })
  }
}
