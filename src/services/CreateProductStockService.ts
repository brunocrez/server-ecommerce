import { prisma } from '../database/prisma-client'
import { ICreateProductStock } from '../interfaces/product-stock.interface'

export class CreateProductStockService {
  async execute({ productId, quantity }: ICreateProductStock) {
    if (!productId || !quantity) {
      throw new Error('You must provide productId and quantity!')
    }

    // verify if product exists before creating a stock for it

    const data = {
      productId,
      quantity,
    }

    const stock = await prisma.stock.create({ data })

    return stock
  }
}
