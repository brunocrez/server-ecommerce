import { FastifyInstance } from 'fastify'
import { productsRoutes } from './routes/products.routes'
import { userRoutes } from './routes/user.routes'
import { stocksRoutes } from './routes/stocks.routes'
import { cartRoutes } from './routes/cart.routes'
import { productImagesRoutes } from './routes/product-images.routes'

export async function routes(fastify: FastifyInstance) {
  fastify.register(userRoutes)
  fastify.register(productsRoutes)
  fastify.register(stocksRoutes)
  fastify.register(cartRoutes)
  fastify.register(productImagesRoutes)
}
