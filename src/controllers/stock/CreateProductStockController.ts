import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateProductStockService } from '@/services/CreateProductStockService'
import { ICreateProductStock } from '@/interfaces/product-stock.interface'

export class CreateProductStockController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const service = new CreateProductStockService()

    try {
      const stock = await service.execute(request.body as ICreateProductStock)
      reply.send(stock)
    } catch (error) {
      reply.status(400).send(error)
    }
  }
}
