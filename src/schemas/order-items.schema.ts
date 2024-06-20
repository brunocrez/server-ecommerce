import { z } from 'zod'

export const createOrderItemsSchema = z.object({
  orderId: z.string().min(1),
  productId: z.string().min(1),
  quantity: z.number().min(1),
  price: z.number().min(1),
  freight: z.number().min(1),
})
