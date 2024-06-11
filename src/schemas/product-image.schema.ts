import { z } from 'zod'

export const createProductImageSchema = z.object({
  url: z.string(),
  productId: z.string(),
})
