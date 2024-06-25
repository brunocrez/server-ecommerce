import { FastifyReply, FastifyRequest } from 'fastify'
import { GetDeliveryService } from '../../services/delivery/GetDeliveryService'

export class GetDeliveryController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { productId } = req.query as { productId: string }
    const service = new GetDeliveryService()

    try {
      const freight = await service.execute(productId)
      reply.send(freight)
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
