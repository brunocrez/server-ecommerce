import { prisma } from '../../database/prisma-client'

export class GetProductsOnGroupService {
  async execute(groupId: number) {
    return await prisma.productsOnGroups.findMany({ where: { groupId } })
  }
}
