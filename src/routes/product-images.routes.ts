import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { GetProductImagesController } from '@/controllers/products-images/GetProductImagesController'

export async function productImagesRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/product-images/:id',
    (req: FastifyRequest, reply: FastifyReply) => {
      return new GetProductImagesController().handle(req, reply)
    },
  )
}
