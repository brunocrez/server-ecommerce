import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateProductService } from '../../services/CreateProductService'
import { ICreateProduct } from '../../interfaces/product.interface'

export class CreateProductsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const service = new CreateProductService()

    try {
      const products = await service.execute(request.body as ICreateProduct)
      reply.send(products)
    } catch (error) {
      reply.status(400).send(error)
    }
  }
}
