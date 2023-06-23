const Router = require('express').Router
const router = new Router()
const postController = require('../controllers/post.controller')


router.post('/posts', postController.createPost)
router.get('/posts', postController.getPostsByUser)


module.exports = router;