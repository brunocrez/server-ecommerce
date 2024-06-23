import { FastifyReply, FastifyRequest } from 'fastify'
import { GetOrderByUserIdService } from '../../services/orders/GetOrderByUserIdService'

export class GetOrderByUserIdController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { userId } = req.query as { userId: string }
    const service = new GetOrderByUserIdService()

    try {
      const order = await service.execute(userId)
      if (!order) {
        throw new Error()
      }
      reply.send(order)
    } catch (error) {
      reply
        .status(404)
        .send({ message: 'This user has no orders in our database!' })
    }
  }
}
