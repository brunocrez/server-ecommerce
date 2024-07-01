import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAddressByUserIdService } from '../../services/address'

export class GetAddressByUserIdController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { userId } = req.query as { userId: string }
    const service = new GetAddressByUserIdService()

    try {
      const response = await service.execute(userId)

      if (!response.length) {
        throw new Error()
      }

      reply.send(response)
    } catch (error) {
      reply.status(404).send({ message: 'User not found on our database!' })
    }
  }
}
