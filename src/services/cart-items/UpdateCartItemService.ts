import { prisma } from '../../database/prisma-client'
import { createCartItemSchema } from '../../schemas/cart-item.schema'
import { GetCartItemByIdService } from './GetCartItemByIdService'

export class UpdateCartItemService {
  async execute(id: string, quantity: number) {
    const { quantity: parseQuantity } = createCartItemSchema.parse({ quantity })

    const getCartItemService = new GetCartItemByIdService()
    const cartItem = await getCartItemService.execute(id)

    if (!cartItem) {
      throw new Error('This item was not found in our database!')
    }

    const data = {
      ...cartItem,
      quantity: parseQuantity,
    }

    return await prisma.cartItem.update({ where: { id }, data })
  }
}
