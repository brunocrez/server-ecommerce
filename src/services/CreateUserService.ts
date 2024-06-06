import { prisma } from '../database/prisma-client'
import { ICreateUser } from '../interfaces/user.interface'

export class CreateUserService {
  async execute({ email, name, password, address, phone }: ICreateUser) {
    if (!name || !email || !password) {
      throw new Error('You must provide name, email and password!')
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        address,
        phone,
      },
    })

    return user
  }
}
