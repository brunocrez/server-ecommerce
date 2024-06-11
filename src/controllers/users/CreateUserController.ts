import { ZodError } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../../services/CreateUserService'
import { ICreateUser } from '../../interfaces/user.interface'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as ICreateUser
    const userService = new CreateUserService()

    try {
      const user = await userService.execute(data)
      reply.send(user)
    } catch (error) {
      if (error instanceof ZodError) {
        reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          issues: error.issues,
        })
      } else {
        reply.status(422).send(error)
      }
    }
  }
}
