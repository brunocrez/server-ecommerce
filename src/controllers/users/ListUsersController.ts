import { FastifyReply, FastifyRequest } from 'fastify'
import { ListUsersService } from '../../services/ListUsersService'

export class ListUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userService = new ListUsersService()
    const users = await userService.execute()
    reply.send(users)
  }
}
