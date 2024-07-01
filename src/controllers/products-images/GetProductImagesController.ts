import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductImagesByProductIdService } from '../../services/product-images'

export class GetProductImagesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    const service = new GetProductImagesByProductIdService()
    const images = await service.execute(id)

    if (!images) {
      reply.status(204).send(images)
    }

    reply.send(images)
  }
}
