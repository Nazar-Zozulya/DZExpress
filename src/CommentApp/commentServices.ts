import express, { Express, Request, Response } from 'express'
import { Prisma } from "@prisma/client";
// import { IPost } from '../PostApp/postServices'
import commentRepository from './commentRepository'

import { Comment } from './types'
import { IError, ISuccess } from '../types/types'


// interface IComment{
//     id: number;
//     comment: string;
//     title: string;
//     img: string | null;
//     // post: IPost
//     postId: number;
// }

// interface ICommentError{
//     status: 'error',
//     message: string
// }

// interface ICommentsByIdSuccess{
//     status: 'success',
//     data: IComment[]
// }

// interface ICommentSuccess{
//     status: 'success',
//     data: IComment
// }




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