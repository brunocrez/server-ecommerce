import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllProductsStockService } from '../../services/GetAllProductsStockService'

export class GetAllProductsStockController {
  async handle(_: FastifyRequest, reply: FastifyReply) {
    const service = new GetAllProductsStockService()
    const stocks = await service.execute()
    reply.send(stocks)
  }
}
