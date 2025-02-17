import {Router} from "express"
import postControllersApi from "./postControllersApi"

const router = Router()

router.get('/all', postControllersApi.getAllPosts)
router.get('/:id', postControllersApi.getPostById)

export default router

