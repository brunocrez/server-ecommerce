import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { CreateCommentService } from '../../services/CreateCommentService'
import { ICreateComment } from '../../interfaces/comment.interface'

export class CreateCommentController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as ICreateComment
    const service = new CreateCommentService()

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
