// const express = require('express')
// const router = express.Router()
import express, { Router  } from 'express'
import controllersPost from '../controllers/postControllers'
// const postControllers = require('../controllers/postControllers')





router:Router.get('/all', controllersPost.getAllPosts)

router:Router.get('/:id', controllersPost.getPostsById)

router:Router.post('/create', controllersPost.createPosts)

const routerPost = {
    router: Router
}

export default routerPost