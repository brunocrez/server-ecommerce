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
    const getCartService = new GetCartByUserIdService()
    const userCart = await getCartService.execute(userId)
    const createCartItem = new CreateCartItemsService()

    // user does not have a cart
    if (!userCart) {
      const cart = await prisma.cart.create({ data: { userId } })
      await createCartItem.execute(cart.id, productId, quantity)
      return await getCartService.execute(userId)
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

    await createCartItem.execute(userCart.cartId, productId, quantity)
    return await getCartService.execute(userId)
  }
}
