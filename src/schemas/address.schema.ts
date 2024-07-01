import { z } from 'zod'

export const createAddressSchema = z.object({
  userId: z.string().min(1).uuid(),
  street: z.string().min(5),
  city: z.string().min(3),
  state: z.string().length(2),
  country: z.string().length(2),
  postalCode: z.string().length(8),
  neighborhood: z.string().min(3),
  number: z.number().int().positive(),
  complement: z.string().min(3).optional(),
})
