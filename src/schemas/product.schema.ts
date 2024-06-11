import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  fullPrice: z.number(),
  finalPrice: z.number(),
  category: z.string(),
  description: z.string(),
})
