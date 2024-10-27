import { Prisma, PrismaClient} from '@prisma/client';
import client from '../client/prismaClient';




async function findUserByEmail(email:any){
    try {
        var findUserByEmail = await client.user.findUnique({
            where:
                email
        })
    } catch (err) {
        console.log("Not Found")
    }
}




const postRepository = {
    findUserByEmail: findUserByEmail
}


export default postRepository