import { prisma } from '../../database/prisma-client'

export class GetAllProductsService {
  async execute() {
    return await prisma.product.findMany()
  }
}
