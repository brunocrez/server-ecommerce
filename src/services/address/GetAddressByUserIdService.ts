import { prisma } from '../../database/prisma-client'

export class GetAddressByUserIdService {
  async execute(userId: string) {
    return await prisma.address.findMany({ where: { userId } })
  }
}
