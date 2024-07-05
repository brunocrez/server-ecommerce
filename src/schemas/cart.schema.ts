import { z } from 'zod'

export const createCartSchema = z.object({
  userId: z.string().uuid(),
  productId: z.string().uuid(),
  quantity: z.number().min(1),
})
