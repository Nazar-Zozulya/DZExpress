import { Prisma } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';

async function getCommentsById(id: number){
    try{
        let comments = await client.comment.findMany({
            where: {
                postId: id
            }
        })
        return comments;
    }
    catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createComment(data: Prisma.CommentCreateInput){
    try{
        let comment = await client.comment.create({
            data: data
        })
        return comment
    }
    catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}  


const commentRepository = {
    createComment: createComment,
    getCommentsById: getCommentsById,

}

export default commentRepository