import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ListProductsController } from '../controllers/products'

export async function productsRoutes(fastify: FastifyInstance) {
  fastify.get('/products', (req: FastifyRequest, reply: FastifyReply) => {
    return new ListProductsController().handle(req, reply)
  })
}
