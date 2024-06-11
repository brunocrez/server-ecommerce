import { prisma } from '../database/prisma-client'

export class GetCommentsService {
  async execute(productId: string) {
    return await prisma.comment.findMany({
      where: { productId },
      include: { user: true },
    })
  }
}
