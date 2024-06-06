import { FastifyReply, FastifyRequest } from 'fastify'
import { ListUserService } from '../../services/ListUserService'

export class ListUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: number }
    const service = new ListUserService()
    const user = await service.execute(Number(id))
    reply.send(user)
  }
}
