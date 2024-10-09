const postServices = require('../services/postServices')


function getAllPosts(req,res) {
    const context = postServices.getAllPosts()
    res.render('posts', context)
}

function getPostsById(req, res) {
    const id = req.params.id
    const data = postServices.getPostsById(id)
    if (id <= data.length){
        res.render('post', data.context)
    } else{
        // res.send("https://www.youtube.com/watch?v=XeoS-zsGVCs............................https://www.youtube.com/watch?v=dQw4w9WgXcQ............Такого поста немаэ")
        res.render('error-post',)
    }
}

function createPosts(req, res) {
    const data = req.body
    console.log(data)
    postServices.createPosts(data)
    res.send('okay')
}



module.exports = {
    getAllPosts: getAllPosts,
    getPostsById: getPostsById,
    createPosts: createPosts
} 