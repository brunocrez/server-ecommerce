import { ZodError } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateProductService } from '../../services/CreateProductService'
import { ICreateProduct } from '../../interfaces/product.interface'

export class CreateProductsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const service = new CreateProductService()

    try {
      const products = await service.execute(request.body as ICreateProduct)
      reply.status(201).send(products)
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
