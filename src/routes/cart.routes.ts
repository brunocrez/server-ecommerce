import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ListCartController } from '../controllers/cart'

export async function cartRoutes(fastify: FastifyInstance) {
  fastify.get('/cart', (req: FastifyRequest, reply: FastifyReply) => {
    return new ListCartController().handle(req, reply)
  })
}
