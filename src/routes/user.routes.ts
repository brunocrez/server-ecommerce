import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  CreateUserController,
  ListUsersController,
  ListUserController,
} from '../controllers/users'

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/user', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().handle(req, reply)
  })

  fastify.get('/user', (req: FastifyRequest, reply: FastifyReply) => {
    return new ListUsersController().handle(req, reply)
  })

  fastify.get('/user/:id', (req: FastifyRequest, reply: FastifyReply) => {
    return new ListUserController().handle(req, reply)
  })
}
