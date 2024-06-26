import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductService } from '../../services/GetProductService'

export class GetProductController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const productService = new GetProductService()

    try {
      const product = await productService.execute(id)

      if (!product) {
        throw new Error('Product not found on our database!')
      }

      reply.send(product)
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
