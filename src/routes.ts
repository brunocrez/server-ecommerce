import { FastifyInstance } from 'fastify'
import { productsRoutes } from './routes/products.routes'
import { userRoutes } from './routes/user.routes'
import { stocksRoutes } from './routes/stocks.routes'
import { productImagesRoutes } from './routes/product-images.routes'
import { commentsRoutes } from './routes/comments.routes'
import { productsOnGroupRoutes } from './routes/products-on-group.route'
import { orderRoutes } from './routes/order.routes'
import { deliveryRoutes } from './routes/delivery.routes'

export async function routes(fastify: FastifyInstance) {
  fastify.register(userRoutes)
  fastify.register(productsRoutes, { prefix: '/products' })
  fastify.register(stocksRoutes)
  fastify.register(productImagesRoutes, { prefix: '/product-images' })
  fastify.register(commentsRoutes, { prefix: '/comments' })
  fastify.register(productsOnGroupRoutes, { prefix: '/products-on-group' })
  fastify.register(orderRoutes, { prefix: '/orders' })
  fastify.register(deliveryRoutes, { prefix: '/delivery' })
}
