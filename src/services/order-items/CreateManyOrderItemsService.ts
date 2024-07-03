import { prisma } from '../../database/prisma-client'
import { ICreateOrderItem } from '../../interfaces/order-item.interface'

export class CreateManyOrderItemsService {
  async execute(data: ICreateOrderItem[]) {
    return await prisma.orderItem.createManyAndReturn({
      data,
      include: { Product: { include: { images: true } } },
    })
  }
}
