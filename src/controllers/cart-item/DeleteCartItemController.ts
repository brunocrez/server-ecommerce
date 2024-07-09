import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteCartItemService } from '../../services/cart-items/DeleteCartItemService'

export class DeleteCartItemController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const service = new DeleteCartItemService()

    try {
      await service.execute(id)
      reply.status(204).send()
    } catch (error) {
      reply.status(422).send({
        message:
          'Sorry, we were not able to delete this resource at this moment!',
      })
    }
  }
}
