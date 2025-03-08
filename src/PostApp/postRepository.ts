import { Prisma } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';

async function getAllPosts(){
    try{
        let post = await client.post.findMany({
        
        })
        return post
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createPost(data: Prisma.PostCreateInput){
    try{
        let post = await client.post.create({
            data: data
        })
        return post
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

async function getPostById(id: number){
    try{
        let post = await client.post.findUnique({
            where:{
                id: id
            }
        })
        return post
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

const postRepository = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createPost:createPost,
    // deletePost:deletePost,

}

export default postRepository