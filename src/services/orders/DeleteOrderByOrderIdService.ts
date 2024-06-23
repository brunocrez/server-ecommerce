import { prisma } from '../../database/prisma-client'

export class DeleteOrderByOrderIdService {
  async execute(id: string) {
    return await prisma.order.delete({ where: { id } })
  }
}
