import { FastifyReply, FastifyRequest } from 'fastify'
import { ListCartService } from '@/services/ListCartService'
import { ListCartItemsService } from '@/services/ListCartItemsService'

export class ListCartController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.query as { userId: string }
    const cartService = new ListCartService()
    const cartItemsService = new ListCartItemsService()

    const cart = await cartService.execute(userId)

    if (cart) {
      const { id } = cart
      const cartItems = await cartItemsService.execute(id)
      reply.send(cartItems)
    }

    reply.status(404).send({ message: 'You have no cart!' })
  }
}
