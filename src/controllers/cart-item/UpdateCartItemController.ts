import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateCartItemService } from '../../services/cart-items/UpdateCartItemService'
import { ZodError } from 'zod'

export class UpdateCartItemController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const { quantity } = req.body as { quantity: number }
    const service = new UpdateCartItemService()

    try {
      const response = await service.execute(id, quantity)
      reply.send(response)
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
