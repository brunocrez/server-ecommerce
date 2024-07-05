import { FastifyReply, FastifyRequest } from 'fastify'
import { GetCartByUserIdService } from '../../services/cart/GetCartByUserIdService'

export class GetCartByUserIdController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { userId } = req.query as { userId: string }
    const service = new GetCartByUserIdService()

    try {
      const response = await service.execute(userId)
      reply.send(response)
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
