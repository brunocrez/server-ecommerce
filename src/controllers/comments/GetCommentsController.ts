import { FastifyReply, FastifyRequest } from 'fastify'
import { GetCommentsService } from '../../services/GetCommentService'

export class GetCommentsController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { productId } = req.query as { productId: string }
    const service = new GetCommentsService()

    try {
      const data = await service.execute(productId)
      reply.send(data)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
