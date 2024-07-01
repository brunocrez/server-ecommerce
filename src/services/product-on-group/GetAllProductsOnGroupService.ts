import { prisma } from '../../database/prisma-client'

export class GetAllProductsOnGroupService {
  async execute() {
    return await prisma.productsOnGroups.findMany()
  }
}
