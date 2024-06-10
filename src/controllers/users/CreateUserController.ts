import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../../services/CreateUserService'
import { ICreateUser } from '../../interfaces/user.interface'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password, phone } = request.body as ICreateUser
    const userService = new CreateUserService()

    try {
      const user = await userService.execute({
        name,
        email,
        password,
        phone,
      })
      reply.send(user)
    } catch (error) {
      reply.status(422).send(error)
    }
  }
}
