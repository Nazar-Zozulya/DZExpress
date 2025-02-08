import { Express, Request, Response } from 'express'
import commentServices from './commentServices'


async function getAllCommentsById(req:Request,res:Response){
    const postId = Number(req.params.id)

    const result = await commentServices.getCommentsByPostId(postId)

    if(result.status === 'error'){
        res.send('error')
    }  else {
        res.render('post', {post : result.data})
    }
}





async function createPosts(req:Request, res:Response) {
    const data = req.body

    const result = await commentServices.createComment(data)

    if (result.status === 'error'){
        res.send('error')
    }
    res.send('ok')
}