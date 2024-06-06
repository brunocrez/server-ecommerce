import { prisma } from '../database/prisma-client'

export class ListCartService {
  async execute(userId: number) {
    return await prisma.cart.findFirst({
      where: { userId },
      select: { id: true },
    })
  }
}
