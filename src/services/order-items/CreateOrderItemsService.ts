import { prisma } from '../../database/prisma-client'
import { ICreateOrderItem } from '../../interfaces/order-item.interface'
import { createOrderItemsSchema } from '../../schemas/order-items.schema'

export class CreateOrderItemsService {
  async execute(body: ICreateOrderItem) {
    const data = createOrderItemsSchema.parse(body)
    return await prisma.orderItem.create({ data })
  }
}
