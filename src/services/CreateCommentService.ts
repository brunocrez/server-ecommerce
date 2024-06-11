import { prisma } from '../database/prisma-client'
import { ICreateComment } from '../interfaces/comment.interface'
import { createCommentSchema } from '../schemas/comment.schema'

export class CreateCommentService {
  async execute(body: ICreateComment) {
    const data = createCommentSchema.parse(body)
    const comment = await prisma.comment.create({ data })
    return comment
  }
}
