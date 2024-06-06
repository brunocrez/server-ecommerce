import { prisma } from '../database/prisma-client'

export class ListProductsService {
  async execute() {
    return await prisma.product.findMany()
  }
}
