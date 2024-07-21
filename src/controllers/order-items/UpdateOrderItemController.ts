import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateOrderItemService } from '../../services/order-items/UpdateOrderItemService'
import { ZodError } from 'zod'

export class UpdateOrderItemController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { quantity } = req.body as { productId: string; quantity: number }
    const { id } = req.params as { id: string }
    const service = new UpdateOrderItemService()

    try {
      const response = await service.execute({ quantity, id })
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
