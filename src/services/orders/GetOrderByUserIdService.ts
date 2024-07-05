import { prisma } from '../../database/prisma-client'
import { OrderStatus } from '../../utils/order-status'

export class GetOrderByUserIdService {
  async execute(userId: string) {
    return await prisma.order.findFirst({
      where: { userId, status: OrderStatus.CREATED },
      include: { Address: true, User: true },
    })
  }
}
