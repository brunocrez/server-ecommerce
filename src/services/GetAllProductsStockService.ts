import { prisma } from '../database/prisma-client'

export class GetAllProductsStockService {
  async execute() {
    return await prisma.stock.findMany()
  }
}
