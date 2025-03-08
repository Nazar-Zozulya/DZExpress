import { Router } from 'express'
import controllersUser from './userControllers'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware'


const routerUser = Router()

routerUser.post('/login', controllersUser.authLogin)

routerUser.post('/reg', controllersUser.authRegistratation)

routerUser.get('/me', authTokenMiddleware, controllersUser.seeMe)

export default routerUser