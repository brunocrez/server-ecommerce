import { prisma } from '../../database/prisma-client'
import { GetProductsOnGroupService } from '../product-on-group'

export class GetProductsByGroupIdService {
  async execute(groupId: number) {
    const productsOnGroupService = new GetProductsOnGroupService()

    const productsOnGroup = await productsOnGroupService.execute(groupId)

    if (!productsOnGroup.length) {
      throw new Error('You must provide a valid groupId!')
    }

    return await prisma.productsOnGroups.findMany({
      where: { groupId },
      include: { product: true },
    })
  }
}
