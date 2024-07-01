// import { validate } from 'email-validator'
import { prisma } from '../../database/prisma-client'
import { ICreateUser } from '../../interfaces/user.interface'
import { createUserSchema } from '../../schemas/userSchema'
import { hashPassword } from '../../utils/hash-password'
import { GetUserByEmail } from './GetUserByEmail'

export class CreateUserService {
  async execute(body: ICreateUser) {
    const user = createUserSchema.parse(body)

    // verify existing user
    const service = new GetUserByEmail()
    const verifyUser = await service.execute(user.email)

    if (verifyUser) {
      throw new Error('This e-mail address is already in use!')
    }

    const hashPassowrd = await hashPassword(user.password)

    const data = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassowrd,
        phone: user.phone,
      },
    })

    return data
  }
}
