import { prisma } from '../database/prisma-client'
import { ICreateOrderRequest } from '../interfaces/order.interface'
import { createOrderSchema } from '../schemas/order.schema'
import { createOrder } from '../utils/create-order'
import { createOrdemItemsData } from '../utils/create-order-items-data'
import { getOrderValues } from '../utils/get-order-values'
import { OrderStatus } from '../utils/order-status'
import { GetMultiProductsByProductIdService } from './GetMultiProductsByProductIdService'

export class CreateOrderService {
  async execute(body: ICreateOrderRequest) {
    const { user, items } = createOrderSchema.parse(body)

    // TODO: verify if userId exists

    // get products by productIds in items
    const productsService = new GetMultiProductsByProductIdService()
    const productIds = items.map((item) => item.productId)
    const products = await productsService.execute(productIds)

    const data = createOrder(products)
    const { sumFreight, sumPrice, total } = getOrderValues(data)

    const createOrderData = {
      userId: user.userId,
      status: OrderStatus.CREATED,
      total,
      createdAt: new Date(),
      subTotal: sumPrice,
      totalFreight: sumFreight,
    }

    const order = await prisma.order.create({ data: createOrderData })
    const orderItemData = createOrdemItemsData(data, order.id)
    const orderItems = await prisma.orderItem.createManyAndReturn({
      data: orderItemData,
    })

    return { order, orderItems }
  }
}
