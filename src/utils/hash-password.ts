import { genSalt, hash } from 'bcrypt'

export async function hashPassword(password: string) {
  const saltRounds = 10
  const salt = await genSalt(saltRounds)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}
