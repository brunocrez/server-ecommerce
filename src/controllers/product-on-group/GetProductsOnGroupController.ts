import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductsOnGroupService } from '../../services/GetProductsOnGroupService'

export class GetProductsOnGroupController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { groupId } = req.query as { groupId: string }
    const service = new GetProductsOnGroupService()

    try {
      const products = await service.execute(Number(groupId))
      reply.send(products)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error!' })
    }
  }
}
