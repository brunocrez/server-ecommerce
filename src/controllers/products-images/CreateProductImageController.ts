import { ZodError } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ICreateProductImage } from '../../interfaces/product-image.interface'
import { CreateProductImageService } from '../../services/CreateProductImageService'

export class CreateProductImageController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as ICreateProductImage
    const service = new CreateProductImageService()

    try {
      const data = await service.execute(body)
      reply.status(201).send(data)
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
