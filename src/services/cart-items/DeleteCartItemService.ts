import { prisma } from '../../database/prisma-client'

export class DeleteCartItemService {
  async execute(id: string) {
    return await prisma.cartItem.delete({ where: { id } })
  }
}
