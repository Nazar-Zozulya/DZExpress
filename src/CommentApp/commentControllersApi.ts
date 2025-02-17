import { Request, Response } from "express";
import commentServices from "./commentServices";


async function getAllCommentsById(req: Request, res:Response){
    const id = req.params.id
    const result = await commentServices.getCommentsByPostId(+id)
    res.json(result)
}


const commentControllersApi = {
    getAllCommentsById:getAllCommentsById
}

export default commentControllersApi