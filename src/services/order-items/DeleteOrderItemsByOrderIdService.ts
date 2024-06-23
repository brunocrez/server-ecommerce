import { prisma } from '../../database/prisma-client'

export class DeleteOrderItemsByOrderIdService {
  async execute(orderId: string) {
    return await prisma.orderItem.deleteMany({ where: { orderId } })
  }
}
