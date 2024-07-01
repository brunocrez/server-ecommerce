import {
  deliveryOptions,
  freeDeliveryOption,
} from '../../utils/delivery-options'
import { GetProductByIdService } from '../product'

export class GetDeliveryService {
  async execute(productId: string) {
    const productService = new GetProductByIdService()
    const product = await productService.execute(productId)

    if (product) {
      if (product.finalPrice > 1999.99) {
        return {
          freeShipping: true,
          deliveryOptions: freeDeliveryOption(),
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
