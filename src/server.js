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

// створення посилання на static файли за посиланням /static/, використовую метод static() бібліотеки express.
app.use('/static/', express.static(path.join(__dirname, 'static')))

// метод додатку express, який очікує запит по вказаному посиланню
// другим аргументом передається функція, яка здійсниться в момент запиту
// функція приймає req та res, req - request, res - response
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
        posts: [{name: 'post 1', author: 'author 1'}, {name: 'post 2', author: 'author 2'}],
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

app.listen(PORT, HOST, () =>{
    console.log('http://localhost:8000')
})