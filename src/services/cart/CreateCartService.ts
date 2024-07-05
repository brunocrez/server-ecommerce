import { prisma } from '../../database/prisma-client'
import { ICreateCart } from '../../interfaces/cart.interface'
import { createCartSchema } from '../../schemas/cart.schema'
import { CreateCartItemsService } from '../cart-items/CreateCartItemsService'
import { GetCartByUserIdService } from './GetCartByUserIdService'

export class CreateCartService {
  async execute(body: ICreateCart) {
    const { userId, productId, quantity } = createCartSchema.parse(body)

    // verify if user already has a cart
    const cartService = new GetCartByUserIdService()
    const userCart = await cartService.execute(userId)

    // user does not have a cart
    if (!userCart) {
      const cart = await prisma.cart.create({ data: { userId } })

      const cartItemsService = new CreateCartItemsService()
      return await cartItemsService.execute(cart.id, productId, quantity)
    }
  }
}
