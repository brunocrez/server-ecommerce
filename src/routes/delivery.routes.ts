import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { GetDeliveryController } from '../controllers/delivery/DeliveryController'

export async function deliveryRoutes(fastify: FastifyInstance) {
  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return new GetDeliveryController().handle(req, reply)
  })
}
