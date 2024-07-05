import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateCartController } from '../controllers/cart/CreateCartController'
import { GetCartByUserIdController } from '../controllers/cart/GetCartByUserIdController'

export async function cartRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateCartController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetCartByUserIdController().handle(req, reply)
  })
}
