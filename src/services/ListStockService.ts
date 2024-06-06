import { prisma } from '../database/prisma-client'

export class ListStockService {
  async execute() {
    return await prisma.stock.findMany({
      include: {
        Product: true,
      },
    })
  }
}
