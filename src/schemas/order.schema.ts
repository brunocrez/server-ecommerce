import { z } from 'zod'

const itemSchema = z.object({
  productId: z.string().uuid().min(1),
  quantity: z.number().min(1),
  price: z.number().min(1),
})

const userSchema = z.object({
  userId: z.string().uuid().min(1),
  name: z.string().min(1),
  email: z.string().email(),
})

export const createOrderSchema = z.object({
  items: z.array(itemSchema),
  user: userSchema,
})
