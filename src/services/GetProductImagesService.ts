import { prisma } from '@/database/prisma-client'

export class GetProductImagesService {
  async execute(productId: string) {
    return await prisma.productImage.findMany({ where: { productId } })
  }
}
