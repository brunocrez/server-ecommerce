import { prisma } from '@/database/prisma-client'
import { ICreateProduct } from '@/interfaces/product.interface'

export class CreateProductService {
  async execute({ name, slug, description, category, price }: ICreateProduct) {
    if (!name || !slug || !description || !category || !price) {
      throw new Error(
        'You must provide name, slug, description, category and price!',
      )
    }

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        category,
        price,
      },
    })

    return product
  }
}
