import { GetProductImagesService } from '@/services/GetProductImagesService'
import { GetProductService } from '@/services/GetProductService'
import { FastifyReply, FastifyRequest } from 'fastify'

export class GetProductController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const productService = new GetProductService()
    const productImagesService = new GetProductImagesService()

    try {
      const product = await productService.execute(id)

      if (product) {
        const images = await productImagesService.execute(id)

        const data = {
          ...product,
          images,
        }

        reply.send(data)
      }

      throw new Error('Product not found on our database!')
    } catch (error) {
      reply.status(404).send(error)
    }
  }
}
