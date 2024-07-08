import { prisma } from '../../database/prisma-client'
import { ICreateCart } from '../../interfaces/cart.interface'
import { createCartSchema } from '../../schemas/cart.schema'
import { CreateCartItemsService } from '../cart-items/CreateCartItemsService'
import { GetCartItemByProductIdService } from '../cart-items/GetCartItemByProductIdService'
import { GetCartByUserIdService } from './GetCartByUserIdService'

export class CreateCartService {
  async execute(body: ICreateCart) {
    const { userId, productId, quantity } = createCartSchema.parse(body)

    // verify if user already has a cart
    const cartService = new GetCartByUserIdService()
    const userCart = await cartService.execute(userId)
    const createCartItem = new CreateCartItemsService()

    // user does not have a cart
    if (!userCart) {
      const cart = await prisma.cart.create({ data: { userId } })
      return await createCartItem.execute(cart.id, productId, quantity)
    }

    // user does have a cart
    // verify if productId already exists on user's cart
    const productInCartService = new GetCartItemByProductIdService()
    const productInCart = await productInCartService.execute(
      productId,
      userCart.cartId,
    )

    if (productInCart) {
      return userCart
    }

    return await createCartItem.execute(userCart.cartId, productId, quantity)
  }
}
