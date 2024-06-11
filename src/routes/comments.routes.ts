import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateCommentController } from '../controllers/comments/CreateCommentController'
import { GetCommentsController } from '../controllers/comments/GetCommentsController'

export async function commentsRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateCommentController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetCommentsController().handle(req, reply)
  })
}
