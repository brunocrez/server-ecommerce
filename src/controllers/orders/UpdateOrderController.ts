import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateOrderService } from '../../services/orders/UpdateOrderService'

export class UpdateOrderController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { status, userId } = req.body as { userId: string; status: string }
    const service = new UpdateOrderService()

    try {
      const response = await service.execute(userId, status)
      reply.send(response)
    } catch (error) {
      reply.status(422).send(error)
    }
  }
}
