import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateOrderController } from '../controllers/orders/CreateOrderController'

export async function orderRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateOrderController().handle(req, reply)
  })
}
