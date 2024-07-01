import { prisma } from '../../database/prisma-client'

export class GetProductImagesByProductIdService {
  async execute(productId: string) {
    return await prisma.productImage.findMany({ where: { productId } })
  }
}
