import { prisma } from '../database/prisma-client'

export class ListUserService {
  async execute(id: number) {
    return await prisma.user.findUnique({ where: { id } })
  }
}
