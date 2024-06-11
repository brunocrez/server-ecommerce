import { z } from 'zod'

export const createCommentSchema = z.object({
  content: z.string().min(1),
  userId: z.string().min(1),
  productId: z.string().min(1),
})
