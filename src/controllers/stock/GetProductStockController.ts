import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductStockService } from '@/services/GetProductStockService'

export class GetProductStockController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { productId } = request.params as { productId: string }
    const service = new GetProductStockService()

    try {
      const stock = await service.execute(productId)

      if (!stock) {
        throw new Error('Product not available at the moment, sorry!')
      }

      reply.send(stock)
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
