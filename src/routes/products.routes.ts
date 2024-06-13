import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  CreateProductsController,
  GetProductsController,
  GetProductController,
} from '../controllers/products'

export async function productsRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductsController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetProductsController().handle(req, reply)
  })

  fastify.get('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetProductController().handle(req, reply)
  })
}
