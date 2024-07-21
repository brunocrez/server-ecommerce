import { prisma } from '../../database/prisma-client'
import { ICreateCart } from '../../interfaces/cart.interface'
import { createCartSchema } from '../../schemas/cart.schema'
import { getFreight } from '../../utils/get-freight'
import { CreateCartItemService } from '../cart-items/CreateCartItemService'
import { GetCartItemByProductIdService } from '../cart-items/GetCartItemByProductIdService'
import { GetProductByIdService } from '../product'
import { GetCartByUserIdService } from './GetCartByUserIdService'

export class CreateCartService {
  async execute(body: ICreateCart) {
    const { productId, quantity, userId } = createCartSchema.parse(body)

    const getCartService = new GetCartByUserIdService()
    const userCart = await getCartService.execute(userId)
    const createCartItem = new CreateCartItemService()
    const getProductService = new GetProductByIdService()

    const product = await getProductService.execute(productId)

    if (!product) {
      throw new Error('We could not create your cart at this moment, sorry!')
    }

    const freight = getFreight(product.finalPrice)

    // user does not have a cart
    if (!userCart) {
      const cart = await prisma.cart.create({ data: { userId } })
      await createCartItem.execute(cart.id, productId, quantity, freight)
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

    await createCartItem.execute(userCart.cartId, productId, quantity, freight)
    return await getCartService.execute(userId)
  }
}
