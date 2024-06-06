import Fastify from 'fastify'
import { routes } from './routes'

const PORT = 8080

const fastify = Fastify()
fastify.register(routes)

fastify.listen({ port: PORT || 3333 }, () => console.log('Server Running on Port:', PORT))
