import { FastifyReply, FastifyRequest } from 'fastify'
import { GetProductsService } from '../../services/GetProductsService'
import { GetProductsByGroupIdService } from '../../services/GetProductsByGroupIdService'
import { GetMultiProductImagesService } from '../../services/GetMultiProductImagesService'
import { buildProductsImages } from '../../utils/build-products-images'

export class GetProductsController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { groupId } = req.query as { groupId: string }
    const getProductsByGroupIdService = new GetProductsByGroupIdService()
    const getAllProductsService = new GetProductsService()
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
