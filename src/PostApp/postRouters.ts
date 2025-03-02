// const express = require('express')
// const router = express.Router()
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware';
import express, { Router } from 'express'
import controllersPost from './postControllers'
// const postControllers = require('../controllers/postControllers')



const router = express.Router()

// router.use(authMiddleware)

// router.use(userRoleMiddleware)

router.get('/all', controllersPost.getAllPosts)

router.get('/showcreate', controllersPost.showCreatePosts)

router.post('/create',  controllersPost.createPosts)

router.get('/:id',  controllersPost.getPostsById)

// const routerPost = {
//     router
// }

export default router