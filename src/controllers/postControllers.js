"use strict";
// const postServices = require('../services/postServices')
// import
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postServices_1 = __importDefault(require("../services/postServices"));
function getAllPosts(req, res) {
    const context = postServices_1.default.getAllPosts();
    res.render('posts', context);
}
function getPostsById(req, res) {
    var id = Number(req.params.id);
    // var idNumber:number = id
    const data = postServices_1.default.getPostsById(id);
    if (id = data.length) {
        res.render('post', data.context);
    }
    else {
        // res.send("https://www.youtube.com/watch?v=XeoS-zsGVCs............................https://www.youtube.com/watch?v=dQw4w9WgXcQ............Такого поста немаэ")
        res.render('error-post');
    }
}
function createPosts(req, res) {
    const data = req.body;
    console.log(data);
    postServices_1.default.createPosts(data);
    res.send('okay');
}
const controllersPost = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts
};
exports.default = controllersPost;
