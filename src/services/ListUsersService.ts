import { prisma } from '../database/prisma-client'

export class ListUsersService {
  async execute() {
    return await prisma.user.findMany()
  }
}
