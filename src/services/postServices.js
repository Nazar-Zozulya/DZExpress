"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allPosts = [
    { id: '1', name: 'post 1', author: 'author 1', description: 'description 1', date: '28.09.2024' },
    { id: '2', name: 'post 2', author: 'author 2', description: 'description 2', date: '29.09.2024' },
    { id: '3', name: 'post 3', author: 'author 3', description: 'description 3', date: '30.09.2024' }
];
function getAllPosts() {
    const context = {
        posts: allPosts
    };
    return context;
}
function getPostsById(id) {
    const context = {
        post: allPosts[id - 1]
    };
    return {
        context: context,
        length: allPosts.length
    };
}
function createPosts(data) {
    // const data = req.body
    allPosts.push(data);
}
const servicesList = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts
};
exports.default = servicesList;
