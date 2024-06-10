import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUserById } from '../../services/GetUserById'

export class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    const service = new GetUserById()

    try {
      const user = await service.execute(id)
      reply.send(user)
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
