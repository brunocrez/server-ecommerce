import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { CreateCartService } from '../../services/cart/CreateCartService'
import { ICreateCart } from '../../interfaces/cart.interface'

export class CreateCartController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as ICreateCart
    const service = new CreateCartService()

    try {
      const response = await service.execute(body)
      reply.status(201).send(response)
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
