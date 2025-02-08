import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';


async function getCommentsById(id: number){
    let comments = await client.comment.findMany({
        where: {
            postId: id
        }
    })
    return comments;
}

async function createComment(data: Prisma.CommentCreateInput){
    let comment = await client.comment.create({
        data: data
    })
    return comment
}  


const commentRepository = {
    createComment: createComment,
    getCommentsById: getCommentsById,

}

export default commentRepository