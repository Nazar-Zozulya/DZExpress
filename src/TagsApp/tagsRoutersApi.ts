import {Router} from "express"
import tagsControllersApi from "./tagsControllersApi"

const router = Router()

router.get('/all', tagsControllersApi.getAllTags)

export default router
