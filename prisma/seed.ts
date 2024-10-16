import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function createOnePost() {
    const post = await prisma.post.create({
        data: {
            name: 'First name',
            Author: 'First author'
        }
    })
}

async function createManyPosts() {
    const post = await prisma.post.createMany({
        data: [
            { name: 'Second name', Author: 'Second author'},
            { name: 'Third name', Author: 'Third author', description: 'Third author description'},
            { name: 'Fourth name', Author: 'Fourth author' }
        ]
    })
}

async function UpdateOnePost(){
    const post = await prisma.post.update({
        where: {
            id: 1,
        },
        data: {
            name: 'Updated name',
            Author: 'Updated Author',
            description: 'Added description'
        }
    })
}

async function getOnePost(){
    const post = await prisma.post.findUnique({
        where: {
            id: 3,
        }
    })
}

async function getManyPosts(){
    const post = await prisma.post.findMany({
        where: {
            id:1
        }
    })
}

async function deleteOnePost(){
    const post = await prisma.post.delete({
        where: {
            id: 4,
        }
    })
}