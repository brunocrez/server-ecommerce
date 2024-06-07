import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const PORT = 8080

const fastify = Fastify()
fastify.register(cors, { origin: '*' })
fastify.register(routes)

fastify.listen({ port: PORT || 3333 }, () =>
  console.log('Server Running on Port:', PORT),
)
