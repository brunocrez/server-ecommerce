import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { DeleteCartItemController } from '../controllers/cart-item/DeleteCartItemController'
import { UpdateCartItemController } from '../controllers/cart-item/UpdateCartItemController'

export async function cartItemRoutes(fastify: FastifyInstance) {
  fastify.delete('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCartItemController().handle(req, reply)
  })

  fastify.put('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new UpdateCartItemController().handle(req, reply)
  })
}
