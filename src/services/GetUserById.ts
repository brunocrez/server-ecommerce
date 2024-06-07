import { prisma } from '@/database/prisma-client'

export class GetUserById {
  async execute(id: string) {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      throw new Error('User not found in our database!')
    }

    return user
  }
}
