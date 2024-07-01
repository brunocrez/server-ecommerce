import { prisma } from '../../database/prisma-client'

export class GetProductByIdService {
  async execute(id: string) {
    return await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    })
  }
}
