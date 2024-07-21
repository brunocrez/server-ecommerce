import { prisma } from '../../database/prisma-client'

export class GetOrderByIdService {
  async execute(id: string) {
    return await prisma.order.findFirst({ where: { id } })
  }
}
