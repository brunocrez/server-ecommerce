import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllProductsStockService } from '../../services/stock'

export class GetAllProductsStockController {
  async handle(_: FastifyRequest, reply: FastifyReply) {
    const service = new GetAllProductsStockService()
    const stocks = await service.execute()
    reply.send(stocks)
  }
}
