import { prisma } from '../../database/prisma-client'

export class GetOrderItemByIdService {
  async execute(id: string) {
    return await prisma.orderItem.findFirst({ where: { id } })
  }
}
