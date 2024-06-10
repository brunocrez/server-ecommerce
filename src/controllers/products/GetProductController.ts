import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductImagesService } from '../../services/GetProductImagesService'
import { GetProductService } from '../../services/GetProductService'
import { GetProductStockService } from '../../services/GetProductStockService'

export class GetProductController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const productService = new GetProductService()
    const productImagesService = new GetProductImagesService()
    const stockService = new GetProductStockService()

    try {
      const product = await productService.execute(id)

      if (product) {
        const images = await productImagesService.execute(id)
        const stock = await stockService.execute(id)

        const data = {
          ...product,
          available: stock && stock.quantity > 0 ? true : false,
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
