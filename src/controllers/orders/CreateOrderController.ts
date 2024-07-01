import { ZodError } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateOrderService } from '../../services/orders'
import { ICreateOrderRequest } from '../../interfaces/order.interface'

export class CreateOrderController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const service = new CreateOrderService()

    try {
      const order = await service.execute(req.body as ICreateOrderRequest)
      reply.status(201).send(order)
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
