import { prisma } from '../database/prisma-client'
import { ICreateOrderRequest } from '../interfaces/order.interface'
import { createOrderSchema } from '../schemas/order.schema'
import { createOrder } from '../utils/create-order'
import { createOrdemItemsData } from '../utils/create-order-items-data'
import { getTotalValue } from '../utils/get-total-value'
import { OrderStatus } from '../utils/order-status'

export class CreateOrderService {
  async execute(body: ICreateOrderRequest) {
    const { user, items } = createOrderSchema.parse(body)

    // verify if userId exists
    // get product price by productId

    const data = createOrder(items)
    const total = getTotalValue(data)

    const createOrderData = {
      userId: user.userId,
      status: OrderStatus.CREATED,
      total,
      createdAt: new Date(),
    }

    const order = await prisma.order.create({ data: createOrderData })

    const orderItemData = createOrdemItemsData(data, order.id)

    await prisma.orderItem.createMany({ data: orderItemData })

    return order
  }
}
