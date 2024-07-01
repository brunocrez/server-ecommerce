import { FastifyReply, FastifyRequest } from 'fastify'
import {
  GetAllProductsService,
  GetProductsByGroupIdService,
} from '../../services/product'
import { GetMultiProductImagesService } from '../../services/product-images'
import { buildProductsImages } from '../../utils/build-products-images'

export class GetProductsController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { groupId } = req.query as { groupId: string }
    const getProductsByGroupIdService = new GetProductsByGroupIdService()
    const getAllProductsService = new GetAllProductsService()
    const productImagesService = new GetMultiProductImagesService()

    try {
      if (!groupId) {
        const products = await getAllProductsService.execute()
        return reply.send(products)
      }

      const result = await getProductsByGroupIdService.execute(Number(groupId))
      const productIds = result.map((item) => item.productId)
      const images = await productImagesService.execute(productIds)
      const data = buildProductsImages(result, images)

      reply.send(data)
    } catch (error) {
      reply.status(500).send(error)
    }
  }
}
