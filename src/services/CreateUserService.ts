import { validate } from 'email-validator'
import { prisma } from '@/database/prisma-client'
import { ICreateUser } from '@/interfaces/user.interface'
import { hashPassword } from '@/utils/hash-password'
import { GetUserByEmail } from './GetUserByEmail'

export class CreateUserService {
  async execute({ email, name, password, phone }: ICreateUser) {
    if (!name || !email || !password) {
      throw new Error('You must provide name, email and password!')
    }

    if (!validate(email)) {
      throw new Error('You must provide a valid e-mail!')
    }

    // verify existing user
    const service = new GetUserByEmail()
    const verifyUser = await service.execute(email)

    if (verifyUser) {
      throw new Error('This e-mail address is already in use!')
    }

    const hashPassowrd = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassowrd,
        phone,
      },
    })

    return user
  }
}
