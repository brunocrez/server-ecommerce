import { prisma } from '../database/prisma-client'
import { ICreateProduct } from '../interfaces/product.interface'
import { createProductSchema } from '../schemas/product.schema'

export class CreateProductService {
  async execute(body: ICreateProduct) {
    const data = createProductSchema.parse(body)

    const product = await prisma.product.create({ data })

    return product
  }
}
