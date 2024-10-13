// const express = require('express')
// const router = express.Router()
import express, { Router } from 'express'
import controllersPost from '../controllers/postControllers'
// const postControllers = require('../controllers/postControllers')



const router = express.Router()

router.get('/all', controllersPost.getAllPosts)

router.get('/:id', controllersPost.getPostsById)

router.post('/create', controllersPost.createPosts)

// const routerPost = {
//     router
// }

export default router