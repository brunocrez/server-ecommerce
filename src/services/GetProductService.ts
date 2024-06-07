import { prisma } from '@/database/prisma-client'

export class GetProductService {
  async execute(id: string) {
    return await prisma.product.findUnique({ where: { id } })
  }
}
