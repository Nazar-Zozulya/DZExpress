import { Prisma, PrismaClient} from '@prisma/client';
import client from '../client/prismaClient';




async function findUserByEmail(email:any){
    try {
        var findUserByEmail = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return findUserByEmail
    } catch (err) {
        console.log("Not Found")
    }
}

async function createUser(data: Prisma.UserCreateInput){
    try {
        var newUser = await client.user.create({
            data: data
        })

        return newUser
    } catch (err) {
        console.log("Not Found")
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
    } catch (err) {
        console.log("Not Found")
    }
}



const postRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    findUserById: findUserById,
}


export default postRepository