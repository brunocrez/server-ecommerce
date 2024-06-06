import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserService } from '../../services/CreateUserService'
import { ICreateUser } from '../../interfaces/user.interface'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password, address, phone } =
      request.body as ICreateUser
    const userService = new CreateUserService()
    const user = await userService.execute({
      name,
      email,
      password,
      address,
      phone,
    })
    reply.send(user)
  }
}
