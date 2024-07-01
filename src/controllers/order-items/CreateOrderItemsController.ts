import { ZodError } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateOrderItemsService } from '../../services/order-items'
import { ICreateOrderItem } from '../../interfaces/order-item.interface'

export class CreateOrderItemsController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const service = new CreateOrderItemsService()

    try {
      const orderItems = await service.execute(req.body as ICreateOrderItem)
      reply.status(201).send(orderItems)
    } catch (error) {
      if (error instanceof ZodError) {
        reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          issues: error.issues,
        })
      } else {
        reply.status(500).send({ message: 'Internal Server Error' })
      }
    }
  }
}
