import {Router} from "express"
import commentControllersApi from "./commentControllersApi"

const router = Router()

router.get('/all', commentControllersApi.getAllCommentsById)
// router.get('/:id', productControllersApi.getProductById)

export default router