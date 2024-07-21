import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { UpdateOrderItemController } from '../controllers/order-items/UpdateOrderItemController'

export async function orderItemRoutes(fastify: FastifyInstance) {
  fastify.put('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new UpdateOrderItemController().handle(req, reply)
  })
}
