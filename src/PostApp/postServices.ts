import postRepository from './postRepository'
import { Prisma } from "@prisma/client";
import { Post } from './types'
import { IError, ISuccess } from '../types/types'

async function getAllPosts(): Promise< ISuccess<Post[]> | IError > {
    const posts = await postRepository.getAllPosts()

    if(!posts){
        return {status: 'error', message: 'posts not found'};
    }
    
    return {status: 'success', data: posts}
}

async function getPostsById(id:number): Promise< ISuccess<Post> | IError > {
    const post = await postRepository.getPostById(id)

    if(!post){
        return {status: 'error', message: 'posts not found'};
    }

    return {status: 'success', data: post}
}

async function createPosts(data: Prisma.PostCreateInput): Promise< ISuccess<Post> | IError> {
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