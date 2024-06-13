import { z } from 'zod'

export const createProductGroupSchema = z.object({
  groupId: z.number().min(1).max(4),
  productId: z.string().min(1),
})
