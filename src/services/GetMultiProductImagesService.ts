import { prisma } from '../database/prisma-client'

export class GetMultiProductImagesService {
  async execute(productIds: string[]) {
    return await prisma.productImage.findMany({
      where: { productId: { in: productIds } },
    })
  }
}
