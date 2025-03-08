import tagsService from "./tagsService";
import { Request, Response } from "express";

async function getAllTags(req: Request, res: Response){
    const result = await tagsService.getAllTags()
    res.json(result)
}

const tagsControllersApi = {
    getAllTags: getAllTags
}

export default tagsControllersApi;