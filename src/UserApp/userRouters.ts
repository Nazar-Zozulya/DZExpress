import express, { Router } from 'express'
import controllersUser from './userControllers'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware'


const routerUser = express.Router()

// routerUser.get('/login', controllersUser.login)

routerUser.post('/login', controllersUser.authLogin)

// routerUser.get('/reg', controllersUser.registration)

routerUser.post('/reg', controllersUser.authRegistratation)

routerUser.get('/me', authTokenMiddleware, controllersUser.seeMe)

export default routerUser