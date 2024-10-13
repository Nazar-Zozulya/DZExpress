"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const path = require('path')
const path_1 = __importDefault(require("path"));
const postRouters_1 = __importDefault(require("./routers/postRouters"));
// const postRouters = require('./routers/postRouters')
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
// '127.0.0.1'
const HOST = 'localhost';
const PORT = 8000;
//ставимо движок 
app.set('view engine', 'ejs');
//встановлюємо папки з шаблонами для ejs
app.set('views', path_1.default.join(__dirname, 'templates'));
app.use(express_1.default.json());
app.use('/post/', postRouters_1.default, express_1.Router);
// створення посилання на static файли за посиланням /static/, використовую метод static() бібліотеки express.
app.use('/static/', express_1.default.static(path_1.default.join(__dirname, 'static')));
// const allPosts = [{id: 1, name: 'post 1', author: 'author 1', description: 'description 1', date: '28.09.2024'}, 
//                 {id:2, name: 'post 2', author: 'author 2', description: 'description 2', date: '29.09.2024'},
//                 {id:3, name: 'post 3', author: 'author 3', description: 'description 3', date: '30.09.2024'}
// ]
app.get('/', (req, res) => {
    const context = {
        "posts": [{ name: 12, author: 12 }, { name: 12, author: 12 }],
        title: 'super shop'
    };
    res.render('index', context);
});
// app.get('/posts', (req, res) => {
//     const contet ={
//         posts: allPosts,
//         "title": 'posts'
//     }
//     res.render('posts', contet)
// })
app.get('/user/', (req, res) => {
    const context = {
        user: [{ name: "Nazar", surname: 'Zozulya', age: 16 }, { name: "Serj", surname: 'Roman', age: '18-20' }]
    };
    res.render('user', context);
});
// app.post('/post/create', (req, res) => {
//     const data = req.body
//     console.log(data)
//     allPosts.push(data)
//     res.send('okay')
// })
app.listen(PORT, HOST, () => {
    console.log('http://localhost:8000');
});
