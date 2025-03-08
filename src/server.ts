import path from 'path'
import router from './PostApp/postRouters'
import routerUser from './UserApp/userRouters'
import postRouterApi from './PostApp/postRoutersApi'
import commentRouterApi from './CommentApp/commentRoutersApi'
import tagsRouterApi from './TagsApp/tagsRoutersApi'
import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express()

const HOST = '127.0.0.1'

const PORT = 8000

app.set('view engine', 'ejs')

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

app.listen(PORT, HOST, () =>{
    console.log(`http://localhost:${PORT}`)
})