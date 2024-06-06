import { FastifyReply, FastifyRequest } from 'fastify'
import { ListProductsService } from '../../services/ListProductsService'

export class ListProductsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const service = new ListProductsService()
    const products = await service.execute()
    reply.send(products)
  }
}
