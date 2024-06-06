import { FastifyReply, FastifyRequest } from 'fastify'
import { ListStockService } from '../../services/ListStockService'

export class ListStockController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const service = new ListStockService()
    const stock = await service.execute()
    reply.send(stock)
  }
}
