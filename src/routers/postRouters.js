"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const router = express.Router()
const express_1 = require("express");
const postControllers_1 = __importDefault(require("../controllers/postControllers"));
// const postControllers = require('../controllers/postControllers')
router: express_1.Router.get('/all', postControllers_1.default.getAllPosts);
router: express_1.Router.get('/:id', postControllers_1.default.getPostsById);
router: express_1.Router.post('/create', postControllers_1.default.createPosts);
const routerPost = {
    router: express_1.Router
};
exports.default = routerPost;
