import { prisma } from '../database/prisma-client'

export class GetProductStockService {
  async execute(productId: string) {
    return await prisma.stock.findFirst({ where: { productId } })
  }
}
