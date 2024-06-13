import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { GetProductImagesController } from '../controllers/products-images/GetProductImagesController'
import { CreateProductImageController } from '../controllers/products-images/CreateProductImageController'

export async function productImagesRoutes(fastify: FastifyInstance) {
  fastify.get('/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetProductImagesController().handle(req, reply)
  })

  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductImageController().handle(req, reply)
  })
}
