import { prisma } from '../../database/prisma-client'
import { ICreateAddress } from '../../interfaces/address.interface'
import { createAddressSchema } from '../../schemas/address.schema'

export class CreateAddressService {
  async execute(body: ICreateAddress) {
    const data = createAddressSchema.parse(body)
    return await prisma.address.create({ data })
  }
}
