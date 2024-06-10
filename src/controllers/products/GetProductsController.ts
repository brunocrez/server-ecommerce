import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductsService } from '../../services/GetProductsService'

export class GetProductsController {
  async handle(_: FastifyRequest, reply: FastifyReply) {
    const service = new GetProductsService()
    const products = await service.execute()
    reply.send(products)
  }
}
