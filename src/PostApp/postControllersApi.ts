import servicesList from "./postServices";
import { Request, Response } from "express";

async function getAllPosts(req: Request, res: Response){
    const result = await servicesList.getAllPosts()
    res.json(result)
}

async function getPostById(req: Request, res: Response){
    const id = req.params.id
    const result = await servicesList.getPostsById(+id)
    res.json(result)
}

const postControllersApi = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
}

export default postControllersApi