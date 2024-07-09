import { z } from 'zod'

export const createCartItemSchema = z.object({
  quantity: z.number().min(1),
})
