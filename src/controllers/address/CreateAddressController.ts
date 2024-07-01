import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateAddressService } from '../../services/address'
import { ICreateAddress } from '../../interfaces/address.interface'
import { ZodError } from 'zod'

export class CreateAddressController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const service = new CreateAddressService()

    try {
      const response = await service.execute(req.body as ICreateAddress)
      reply.status(201).send(response)
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
