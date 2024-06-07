import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  CreateProductsController,
  GetProductsController,
} from '@/controllers/products'

export async function productsRoutes(fastify: FastifyInstance) {
  fastify.post('/products', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductsController().handle(req, reply)
  })

  fastify.get('/products', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetProductsController().handle(req, reply)
  })
}
