import { Prisma } from "@prisma/client";
import commentRepository from './commentRepository'

import { Comment } from './types'
import { IError, ISuccess } from '../types/types'




async function getCommentsByPostId(id: number): Promise<ISuccess<Comment[]> | IError>{
    let comments = await commentRepository.getCommentsById(id)
    if(!comments){
        return {status: 'error', message: 'error creating post'};
    }

    return {status: 'success', data: comments}
}


async function createComment(data: Prisma.CommentCreateInput): Promise<ISuccess<Comment> | IError> {
    let comment = await commentRepository.createComment(data)

    if(!comment){
        return {status: 'error', message: 'error creating post'};
    }

    return {status: 'success', data: comment}
}


const commentServices = {
    createComment: createComment,
    getCommentsByPostId: getCommentsByPostId,
}

export default commentServices