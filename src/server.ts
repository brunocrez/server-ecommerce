import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const PORT = 8080

const fastify = Fastify()
fastify.register(cors, { origin: '*' })
fastify.register(routes)

fastify.listen({ port: PORT }, () =>
  console.log(`Server Running on: http://localhost:${PORT}`),
)
