import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { GetProductsOnGroupController } from '../controllers/product-on-group/GetProductsOnGroupController'
import { CreateProductOnGroupController } from '../controllers/product-on-group/CreateProductOnGroupController'
import { GetAllProductsOnGroupController } from '../controllers/product-on-group/GetAllProductsOnGroupController'

export async function productsOnGroupRoutes(fastify: FastifyInstance) {
  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetProductsOnGroupController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetAllProductsOnGroupController().handle(req, reply)
  })

  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductOnGroupController().handle(req, reply)
  })
}
