import {Router} from "express"
import commentControllersApi from "./commentControllersApi"

const router = Router()

router.get('/:id', commentControllersApi.getAllCommentsById)
// router.get('/:id', productControllersApi.getProductById)

export default router