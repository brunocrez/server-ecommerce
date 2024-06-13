import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { CreateProductOnGroupService } from '../../services/CreateProductOnGroupService'
import { ICreateProductGroup } from '../../interfaces/product-group.interface'

export class CreateProductOnGroupController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as ICreateProductGroup
    const service = new CreateProductOnGroupService()

    try {
      const productGroup = await service.execute(body)
      reply.status(201).send(productGroup)
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
