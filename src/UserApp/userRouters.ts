import express, { Router } from 'express'
import controllersUser from './userControllers'


const routerUser = express.Router()

routerUser.get('/login', controllersUser.login)

routerUser.post('/login', controllersUser.authLogin)

routerUser.get('/reg', controllersUser.registration)

routerUser.post('/reg', controllersUser.authRegistratation)

export default routerUser