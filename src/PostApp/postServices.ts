import express, { Express, Request, Response } from 'express'
import postRepository from './postRepository'
import { Prisma } from "@prisma/client";

export interface IPost{
    id: number;
    name: string;
    // author: string;
    description: string | null;  

    // date: string;
}


// const allPosts = [
//     {id: '1', name: 'post 1', author: 'author 1', description: 'description 1', date: '28.09.2024'}, 
//     {id:'2', name: 'post 2', author: 'author 2', description: 'description 2', date: '29.09.2024'},
//     {id:'3', name: 'post 3', author: 'author 3', description: 'description 3', date: '30.09.2024'}
// ]


interface IPostError{
    status: 'error',
    message: string
}

interface IPostsSuccess{
    status: 'success',
    data: IPost[]
}

interface IPostSuccess{
    status: 'success',
    data: IPost
}

async function getAllPosts(): Promise< IPostsSuccess | IPostError > {
    const posts = await postRepository.getAllPosts()

    if(!posts){
        return {status: 'error', message: 'posts not found'};
    }
    
    return {status: 'success', data: posts}
}

async function getPostsById(id:number): Promise< IPostSuccess | IPostError > {
    const post = await postRepository.getPostById(id)

    if(!post){
        return {status: 'error', message: 'posts not found'};
    }

    return {status: 'success', data: post}
}

async function createPosts(data: Prisma.PostCreateInput): Promise<IPostSuccess | IPostError> {
    let post = await postRepository.createPost(data)

    if(!post){
        return {status: 'error', message: 'error creating post'};
    }

    return {status: 'success', data: post}
}

const servicesList = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts
} 

export default servicesList