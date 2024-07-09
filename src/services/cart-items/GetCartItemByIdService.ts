import { prisma } from '../../database/prisma-client'

export class GetCartItemByIdService {
  async execute(id: string) {
    return await prisma.cartItem.findFirst({ where: { id } })
  }
}
