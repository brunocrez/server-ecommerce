import { prisma } from '../../database/prisma-client'
import { GetCartItemsByCartIdService } from '../cart-items/GetCartItemsByCartIdService'

export class GetCartByUserIdService {
  async execute(userId: string) {
    const cart = await prisma.cart.findFirst({ where: { userId } })

    if (!cart) {
      throw new Error('This user has no available cart in our database!')
    }

    const itemsService = new GetCartItemsByCartIdService()
    const cartItems = await itemsService.execute(cart.id)
    const items = cartItems.map((item) => ({
      ...item,
      product: { ...item.Product },
      Product: undefined,
    }))
    return { items }
  }
}
