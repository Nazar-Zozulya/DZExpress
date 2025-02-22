import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';

async function getAllTags(){
    try{
        let tags = await client.tags.findMany({
        
        })
        return tags
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

const tagsRepository = {
    getAllTags: getAllTags
}

export default tagsRepository