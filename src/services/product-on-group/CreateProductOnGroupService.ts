import { prisma } from '../../database/prisma-client'
import { ICreateProductGroup } from '../../interfaces/product-group.interface'
import { createProductGroupSchema } from '../../schemas/product-group.schema'

export class CreateProductOnGroupService {
  async execute(body: ICreateProductGroup) {
    // TODO: verify if productId exists
    const data = createProductGroupSchema.parse(body)
    return await prisma.productsOnGroups.create({ data })
  }
}
