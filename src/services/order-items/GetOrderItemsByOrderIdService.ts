import { prisma } from '../../database/prisma-client'

export class GetOrderItemsByOrderIdService {
  async execute(orderId: string) {
    return await prisma.orderItem.findMany({
      where: { orderId },
      include: { Product: { include: { images: true } } },
    })
  }
}
