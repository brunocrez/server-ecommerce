import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductImagesService } from '../../services/GetProductImagesService'

export class GetProductImagesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    const service = new GetProductImagesService()
    const images = await service.execute(id)

    if (!images) {
      reply.status(204).send(images)
    }

    reply.send(images)
  }
}
