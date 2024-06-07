import { prisma } from '@/database/prisma-client'

export class GetProductsService {
  async execute() {
    return await prisma.product.findMany()
  }
}
