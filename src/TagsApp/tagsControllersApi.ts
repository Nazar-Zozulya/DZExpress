import tagsService from "./tagsService";
import { Request, Response } from "express";
// Лишние пустые строки





async function getAllTags(req: Request, res: Response){
    // а вызов функции?
    const result = await tagsService.getAllTags
    res.json(result)
}

const tagsControllersApi = {
    getAllTags: getAllTags
}

export default tagsControllersApi;