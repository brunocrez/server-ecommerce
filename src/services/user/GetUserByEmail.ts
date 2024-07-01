import { prisma } from '../../database/prisma-client'

export class GetUserByEmail {
  async execute(email: string) {
    return await prisma.user.findUnique({ where: { email } })
  }
}
