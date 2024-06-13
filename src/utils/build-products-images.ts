import { ICreateProductGroup } from '../interfaces/product-group.interface'
import { ICreateProductImage } from '../interfaces/product-image.interface'
import { ICreateProduct } from '../interfaces/product.interface'

type ProductType = { product: ICreateProduct } & ICreateProductGroup

export function buildProductsImages(
  products: ProductType[],
  images: ICreateProductImage[],
) {
  return products.map((el) => {
    const filterImages = images.filter(
      (image) => image.productId === el.productId,
    )

    return {
      ...el.product,
      images: filterImages,
    }
  })
}
