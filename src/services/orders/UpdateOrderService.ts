import { prisma } from '../../database/prisma-client'
import { isValidKey } from '../../utils/order-status'
import { GetOrderItemsByOrderIdService } from '../order-items/GetOrderItemsByOrderIdService'
import { GetOrderByUserIdService } from './GetOrderByUserIdService'

export class UpdateOrderService {
  async execute(userId: string, status: string) {
    if (!isValidKey(status)) {
      throw new Error(`Status ${status} is not valid. Please try another one.`)
    }

    const orderService = new GetOrderByUserIdService()
    const order = await orderService.execute(userId)

    if (order) {
      const data = {
        ...order,
        status,
        addressId: undefined,
        Address: undefined,
        User: undefined,
        updatedAt: new Date(),
      }

      const orderResponse = await prisma.order.update({
        where: { id: order.id },
        data,
      })

      const service = new GetOrderItemsByOrderIdService()
      const orderItems = await service.execute(order.id)

      return {
        order: orderResponse,
        orderItems,
        address: order.Address,
        user: order.User,
      }
    }

    throw new Error(
      'We could not find an available order to update at this moment!',
    )
  }
}
