import { deliveryOptions } from '../../utils/delivery-options'
import { GetProductService } from '../GetProductService'

export class GetDeliveryService {
  async execute(productId: string) {
    const productService = new GetProductService()
    const product = await productService.execute(productId)

    if (product) {
      if (product.finalPrice > 1999.99) {
        return {
          freeShipping: true,
          deliveryOptions: [],
        }
      }

      return {
        freeShipping: false,
        deliveryOptions: deliveryOptions(product.finalPrice),
      }
    }

    throw new Error('Product not found on our database!')
  }
}
