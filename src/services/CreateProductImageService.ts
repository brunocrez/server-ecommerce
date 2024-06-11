import { prisma } from '../database/prisma-client'
import { ICreateProductImage } from '../interfaces/product-image.interface'
import { createProductImageSchema } from '../schemas/product-image.schema'

export class CreateProductImageService {
  async execute(body: ICreateProductImage) {
    const data = createProductImageSchema.parse(body)

    const productImage = await prisma.productImage.create({ data })

    return productImage
  }
}
