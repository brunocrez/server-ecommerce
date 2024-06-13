import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllProductsOnGroupService } from '../../services/GetAllProductsOnGroupService'

export class GetAllProductsOnGroupController {
  async handle(_: FastifyRequest, reply: FastifyReply) {
    const service = new GetAllProductsOnGroupService()
    console.log('chamei')

    try {
      const products = await service.execute()
      reply.send(products)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error!' })
    }
  }
}
