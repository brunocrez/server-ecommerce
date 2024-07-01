import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateAddressController } from '../controllers/address/CreateAddressController'
import { GetAddressByUserIdController } from '../controllers/address/GetAddressByUserIdController'

export async function addressRoutes(fastify: FastifyInstance) {
  fastify.post('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateAddressController().handle(req, reply)
  })

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetAddressByUserIdController().handle(req, reply)
  })
}
