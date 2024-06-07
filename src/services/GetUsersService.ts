import { prisma } from '@/database/prisma-client'

export class GetUsersService {
  async execute() {
    return await prisma.user.findMany()
  }
}
