import { Prisma } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';




async function findUserByEmail(email:any){
    try {
        var findUserByEmail = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return findUserByEmail
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createUser(data: Prisma.UserCreateInput){
    try {
        var newUser = await client.user.create({
            data: data
        })

        return newUser
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
                    if (error.code in Object.keys(errors)){
                        const errorKey: keyof IErrors = error.code
                        console.log(errors[errorKey])
                    }
                }
    }
}

async function  findUserById(id: number){
    try {
        var findUserById = await client.user.findUnique({
            where: {
                id: id
            }
        })
        return findUserById
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}



const postRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    findUserById: findUserById,
}


export default postRepository