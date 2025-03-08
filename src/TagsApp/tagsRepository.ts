import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';

async function getAllTags(){
    try{
        let tags = await client.tags.findMany({
        
        })
        return tags
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

const tagsRepository = {
    getAllTags: getAllTags
}

export default tagsRepository