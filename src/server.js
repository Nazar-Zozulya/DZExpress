const express = require('express')
const path = require('path')

const app = express()

// '127.0.0.1'
const HOST = 'localhost'
const PORT = 8000
//ставимо движок 
app.set('view engine', 'ejs')
//встановлюємо папки з шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'))

app.use(express.json()) 

// створення посилання на static файли за посиланням /static/, використовую метод static() бібліотеки express.
app.use('/static/', express.static(path.join(__dirname, 'static')))

const allPosts = [{id: 1, name: 'post 1', author: 'author 1', description: 'description 1', date: '28.09.2024'}, 
                {id:2, name: 'post 2', author: 'author 2', description: 'description 2', date: '29.09.2024'},
                {id:3, name: 'post 3', author: 'author 3', description: 'description 3', date: '30.09.2024'}
]


app.get('/', (req, res) => {
    // метод send об'єкта res дозволяє надіслати відповідь
    // res.send("hello world")
    // res.sendFile(path.join(__dirname, "templates", "index.html"))
    // res.sendFile(path.join(__dirname, "./templates/index.html"))
    // res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    // Создаем переменную контекст, которая отвечает за передачу данных в ejs шаблон.
    const context = {
       // words: ['hello', 'world', 'rinat']
       "posts": [{name: 12, author: 12}, {name: 12, author: 12}],
       title: 'super shop'
    }
    // Для отправки ejs-шаблонов используем метод render.
    // Первым аргументом пишем навание шаблона БЕЗ РАСШИРЕНИЯ!
    // Вторым аргументом передаются данные(context) которые нужны шаблону.
    res.render('index', context)
})

app.get('/products', (req, res) => {
    // res.send("products")
    // res.sendFile(path.join(__dirname, './templates/products.html'))
    const context ={
        products: [{name: 'ilya', price: 12}, {name: 'rinat', price: 1.5}, {name: 'kamilla', price: 100}],
        
    }

    res.render('products', context)
})

app.get('/posts', (req, res) => {
    const contet ={
        posts: allPosts,
        "title": 'posts'

    }

    res.render('posts', contet)
})

app.get('/user/', (req, res) => {
    const context ={
        user: [{name: "Nazar", surname: 'Zozulya', age: 16}, {name: "Serj", surname: 'Roman', age: '18-20'}]
    }

    res.render('user', context)
})

app.get('/post/:id', (req, res) => {

    const id = req.params.id
    const context = {
        post: allPosts[id-1],
    }
    if (id <= allPosts.length){
        res.render('post', context)
    } else{
        // res.send("https://www.youtube.com/watch?v=XeoS-zsGVCs............................https://www.youtube.com/watch?v=dQw4w9WgXcQ............Такого поста немаэ")
        res.sendFile(path.join(__dirname, './templates/error-post.html'))
    }
})

app.post('/post/create', (req, res) => {
    const data = req.body
    console.log(data)
    allPosts.push(data)
    res.send('okay')
})

app.listen(PORT, HOST, () =>{
    console.log('http://localhost:8000')
})