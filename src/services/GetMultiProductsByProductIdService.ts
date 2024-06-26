import { prisma } from '../database/prisma-client'

export class GetMultiProductsByProductIdService {
  async execute(ids: string[]) {
    return await prisma.product.findMany({
      where: { id: { in: ids } },
      include: { images: true },
    })
  }
}
