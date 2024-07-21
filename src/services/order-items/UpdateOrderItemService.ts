import { prisma } from '../../database/prisma-client'
import { UpdateOrderItemRequestType } from '../../interfaces/order-item.interface'
import { updateOrderItemsSchema } from '../../schemas/order-items.schema'
import { GetOrderByIdService } from '../orders/GetOrderByIdService'
import { GetOrderItemByIdService } from './GetOrderItemByIdService'
import { GetOrderItemsByOrderIdService } from './GetOrderItemsByOrderIdService'

export class UpdateOrderItemService {
  async execute(payload: UpdateOrderItemRequestType) {
    const { id, quantity } = updateOrderItemsSchema.parse(payload)
    const getOrderItemService = new GetOrderItemByIdService()
    const getOrderItemsByOrderIdService = new GetOrderItemsByOrderIdService()
    const getOrderByIdService = new GetOrderByIdService()
    const orderItem = await getOrderItemService.execute(id)

    if (!orderItem) {
      throw new Error('We could not find this order item in our database!')
    }

    const data = {
      ...orderItem,
      quantity,
    }

    const orderItemData = await prisma.orderItem.update({ data, where: { id } })
    const orderItems = await getOrderItemsByOrderIdService.execute(
      orderItemData.orderId,
    )

    let subTotal = 0
    let totalFreight = 0
    orderItems.forEach((orderItem) => {
      subTotal += orderItem.quantity * orderItem.price
      totalFreight += orderItem.freight
    })

    const order = await getOrderByIdService.execute(orderItemData.orderId)

    if (!order) {
      throw new Error(
        'We could not complete this update at this moment, sorry!',
      )
    }

    return await prisma.order.update({
      where: { id: order.id },
      data: {
        ...order,
        subTotal,
        totalFreight,
        total: subTotal + totalFreight,
      },
    })
  }
}
