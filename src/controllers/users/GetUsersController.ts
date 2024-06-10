import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUsersService } from '../../services/GetUsersService'

export class GetUsersController {
  async handle(_: FastifyRequest, reply: FastifyReply) {
    const userService = new GetUsersService()

    try {
      const users = await userService.execute()
      reply.send(users)
    } catch (error) {
      reply.status(422).send(error)
    }
  }
}
