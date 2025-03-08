// const express = require('express')
// const path = require('path')
import path from 'path'
import router from './PostApp/postRouters'
import routerUser from './UserApp/userRouters'
import postRouterApi from './PostApp/postRoutersApi'
import commentRouterApi from './CommentApp/commentRoutersApi'
import tagsRouterApi from './TagsApp/tagsRoutersApi'
// const postRouters = require('./routers/postRouters')
// Импорт не используется, нужно убрать
import express, { Express, Request, Response, Router } from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express()

// '127.0.0.1'
const HOST = 'localhost'
const PORT = 8000
//ставимо движок 
app.set('view engine', 'ejs')
//встановлюємо папки з шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'))

app.use(express.json()) 

app.use(cors({
    origin: ['http://localhost:3000']
}))




app.use('/api/comment/', commentRouterApi)

app.use('/api/tags/', tagsRouterApi)

app.use('/api/post/', postRouterApi)

app.use('/api/user/', routerUser)

app.use('/post/', router)

app.use(cookieParser())


app.use('/static/', express.static(path.join(__dirname, 'static')))



app.get('/', (req, res) => {
    const context = {
       "posts": [{name: 12, author: 12}, {name: 12, author: 12}],
       title: 'super shop'
    }
    res.render('index', context)
})



// app.get('/posts', (req, res) => {
//     const contet ={
//         posts: allPosts,
//         "title": 'posts'

//     }

//     res.render('posts', contet)
// })

app.get('/user/', (req, res) => {
    const context ={
        user: [{name: "Nazar", surname: 'Zozulya', age: 16}, {name: "Serj", surname: 'Roman', age: '18-20'}]
    }

    res.render('user', context)
})


// app.post('/post/create', (req, res) => {
//     const data = req.body
//     console.log(data)
//     allPosts.push(data)
//     res.send('okay')
// })
app.listen(PORT, HOST, () =>{
    console.log(`http://localhost:${PORT}`)
})