import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ListStockController } from '../controllers/stock/ListStockController'

export async function stocksRoutes(fastify: FastifyInstance) {
  fastify.get('/stocks', (req: FastifyRequest, reply: FastifyReply) => {
    return new ListStockController().handle(req, reply)
  })
}
