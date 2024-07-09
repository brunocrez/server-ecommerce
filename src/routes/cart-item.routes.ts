import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { DeleteCartItemController } from '../controllers/cart-item/DeleteCartItemController'

export async function cartItemRoutes(fastify: FastifyInstance) {
  fastify.delete('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCartItemController().handle(req, reply)
  })
}
