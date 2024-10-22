import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';

async function getAllPosts(){
    try{
        let post = await client.post.findMany({
        
        })
        return post
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function getPostById(id: number){
    let post = await client.post.findUnique({
        where:{
            id: id
        }
    })
    return post

}

async function createProduct(data: Prisma.PostCreateInput){
    let post = await client.post.create({
        data: data
    })
    return post
}  


const postRepository = {
    getAllPosts:getAllPosts,
}

export default postRepository