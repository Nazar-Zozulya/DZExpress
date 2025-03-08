// const postServices = require('../services/postServices')
// import
// Импорт не используется, нужно убрать
import servicesList from "./postServices"
import { Express, Request, Response } from 'express'

async function getAllPosts(req:Request,res:Response) {
    const context = await servicesList.getAllPosts()
    if(context.status == 'error'){
        res.send('error')
    } else {
        res.render('posts', {posts: context.data})
    }
}

async function getPostsById(req:Request, res:Response) {
    const id = Number(req.params.id)


    const result = await servicesList.getPostsById(id)

    if(result.status === 'error'){
        res.send('error')
    }  else {
        res.render('post', {post : result.data})
    }
}

async function createPosts(req:Request, res:Response) {
    const data = req.body

    const result = await servicesList.createPosts(data)

    if (result.status === 'error'){
        res.send('error')
    }
    res.send('ok')
}

function showCreatePosts(req:Request, res:Response) {
    res.render('create-post')
}



const controllersPost = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts,
    showCreatePosts: showCreatePosts
} 

export default controllersPost;
