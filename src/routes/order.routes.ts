import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateOrderController } from '../controllers/orders/CreateOrderController'
import { GetOrderByUserIdController } from '../controllers/orders/GetOrderByUserIdController'
import { UpdateOrderController } from '../controllers/orders/UpdateOrderController'

export async function orderRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateOrderController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetOrderByUserIdController().handle(req, reply)
  })

  fastify.put('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new UpdateOrderController().handle(req, reply)
  })
}
