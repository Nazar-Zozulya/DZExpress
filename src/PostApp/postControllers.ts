// const postServices = require('../services/postServices')
// import

import servicesList from "./postServices"
import express, { Express, Request, Response } from 'express'

async function getAllPosts(req:Request,res:Response) {
    const context = await servicesList.getAllPosts()
    res.render('posts', context)
}

function getPostsById(req:Request, res:Response) {
    var id = Number(req.params.id)
    // var idNumber:number = id
    const data = servicesList.getPostsById(id)
    if (id = data.length){
        res.render('post', data.context)
    } else{
        // res.send("https://www.youtube.com/watch?v=XeoS-zsGVCs............................https://www.youtube.com/watch?v=dQw4w9WgXcQ............Такого поста немаэ")
        res.render('error-post',)
    }
}

function createPosts(req:Request, res:Response) {
    const data = req.body
    console.log(data)
    servicesList.createPosts(data)
    res.send('okay')
}



const controllersPost = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts
} 

export default controllersPost;
