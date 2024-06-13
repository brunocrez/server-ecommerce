import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductsOnGroupService } from '../../services/GetProductsOnGroupService'
import { GetAllProductsOnGroupService } from '../../services/GetAllProductsOnGroupService'

export class GetProductsOnGroupController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { groupId } = req.query as { groupId: string }
    const getProductsService = new GetProductsOnGroupService()
    const getAllService = new GetAllProductsOnGroupService()

    try {
      if (groupId) {
        const products = await getProductsService.execute(Number(groupId))
        reply.send(products)
      }

      const products = await getAllService.execute()
      reply.send(products)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error!' })
    }
  }
}
