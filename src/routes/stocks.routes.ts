import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { GetProductStockController } from '@/controllers/stock/GetProductStockController'
import { GetAllProductsStockController } from '@/controllers/stock/GetAllProductsStockController'
import { CreateProductStockController } from '@/controllers/stock/CreateProductStockController'

export async function stocksRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/stocks/:productId',
    (req: FastifyRequest, reply: FastifyReply) => {
      return new GetProductStockController().handle(req, reply)
    },
  )

  fastify.get('/stocks', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetAllProductsStockController().handle(req, reply)
  })

  fastify.post('/stocks', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateProductStockController().handle(req, reply)
  })
}
