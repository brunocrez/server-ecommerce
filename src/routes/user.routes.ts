import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  CreateUserController,
  GetUsersController,
  GetUserController,
} from '../controllers/users'

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/users', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().handle(req, reply)
  })

  fastify.get('/users', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetUsersController().handle(req, reply)
  })

  fastify.get('/users/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetUserController().handle(req, reply)
  })
}
