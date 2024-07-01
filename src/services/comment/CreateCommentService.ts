import { prisma } from '../../database/prisma-client'
import { ICreateComment } from '../../interfaces/comment.interface'
import { createCommentSchema } from '../../schemas/comment.schema'

export class CreateCommentService {
  async execute(body: ICreateComment) {
    const data = createCommentSchema.parse(body)
    return await prisma.comment.create({ data })
  }
}
