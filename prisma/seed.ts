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








async function createOneComment(){
    const comment = await prisma.comment.create({
        data: {
            comment: 'First comment',
            title: 'First title',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRtCXZnOIjV-MQkeAjjoPd2_SHPmTzJur2A&s',
            postId: 1
        }
    })
}

async function createManyComments(){
    const comment = await prisma.comment.createMany({
        data: [
            {
                comment: 'Second comment',
                title: 'Second title',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRtCXZnOIjV-MQkeAjjoPd2_SHPmTzJur2A&s',
                postId: 1
            },
            {
                comment: 'Third comment',
                title: 'Third title',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRtCXZnOIjV-MQkeAjjoPd2_SHPmTzJur2A&s',
                postId: 2
            },
            {
                comment: 'Fourth comment',
                title: 'Fourth title',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRtCXZnOIjV-MQkeAjjoPd2_SHPmTzJur2A&s',
                postId: 2
            },
        ]
    })
}

async function deleteOneComment(){
    const comment = await prisma.comment.delete({
        where: {
            id: 2,
        }
    })
}

async function findOneComment(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1,
        }
    })  
}

async function findOneCommentByPost(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1,
        },

        include: {
            post :true
        }
    })  
}

async function findPostByComment(){
    const post = await prisma.post.findMany({
        where: {
            id: 1,
        },

        include: {
            comments : true
        }
    })
}

async function updateOneComment(){
    const comment = await prisma.comment.update({
        where: {
            id: 1
        },

        data: {
            comment: 'Updated comment',
            title: 'Updated title',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRtCXZnOIjV-MQkeAjjoPd2_SHPmTzJur2A&s',
        }
    })
}






async function main() {
    await createOnePost()
    await createManyPosts()
    await UpdateOnePost()
    await getOnePost()
    await getManyPosts()
    await deleteOnePost()
    await createOneComment()
    await createManyComments()
    await deleteOneComment()
    await findOneComment()
    await findOneCommentByPost
    await findPostByComment()
    await updateOneComment()
}


main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})