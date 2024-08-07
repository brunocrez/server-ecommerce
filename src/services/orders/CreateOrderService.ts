import { prisma } from '../../database/prisma-client'
import { ICreateOrderRequest } from '../../interfaces/order.interface'
import { createOrderSchema } from '../../schemas/order.schema'
import { createOrder } from '../../utils/create-order'
import { createOrdemItemsData } from '../../utils/create-order-items-data'
import { getOrderValues } from '../../utils/get-order-values'
import { OrderStatus } from '../../utils/order-status'
import { GetMultiProductsByProductIdService } from '../product'
import { DeleteOrderItemsByOrderIdService } from '../order-items'
import { DeleteOrderByOrderIdService, GetOrderByUserIdService } from '.'
import { CreateManyOrderItemsService } from '../order-items/CreateManyOrderItemsService'

export class CreateOrderService {
  async execute(body: ICreateOrderRequest) {
    const { user, items, addressId } = createOrderSchema.parse(body)

    // TODO: verify if userId exists
    // TODO: verify if addressId exists and is related to given userId

    // verify if user already has an order with status CREATED
    const orderService = new GetOrderByUserIdService()
    const userPreviousOrder = await orderService.execute(user.userId)

    if (userPreviousOrder) {
      const deleteOrderItemsService = new DeleteOrderItemsByOrderIdService()
      await deleteOrderItemsService.execute(userPreviousOrder.id)
      const deleteOrderService = new DeleteOrderByOrderIdService()
      await deleteOrderService.execute(userPreviousOrder.id)
    }

    // get products by productIds in items
    const productsService = new GetMultiProductsByProductIdService()
    const productIds = items.map((item) => item.productId)
    const products = await productsService.execute(productIds)

    const data = createOrder(products, items)
    const { sumFreight, sumPrice, total } = getOrderValues(data)

    const createOrderData = {
      userId: user.userId,
      status: OrderStatus.CREATED,
      total,
      createdAt: new Date(),
      subTotal: sumPrice,
      totalFreight: sumFreight,
      addressId,
    }

    const orderItemService = new CreateManyOrderItemsService()
    const order = await prisma.order.create({ data: createOrderData })
    const orderItemData = createOrdemItemsData(data, order.id)
    const orderItems = await orderItemService.execute(orderItemData)

    return { order, orderItems }
  }
}
