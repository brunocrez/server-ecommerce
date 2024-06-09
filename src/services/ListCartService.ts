import { prisma } from '@/database/prisma-client'

export class ListCartService {
  async execute(userId: string) {
    return await prisma.cart.findFirst({
      where: { userId },
      select: { id: true },
    })
  }
}
