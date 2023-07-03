const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// All paths start with '/api/posts'

// POST /api/posts/new
router.post('/new', postsCtrl.create);

// GET /api/posts
router.get('/', postsCtrl.fetchPosts);

// GET /api/posts/category/:category
router.get('/category/:category', postsCtrl.fetchPostsByCategory);

// GET /posts/:postId
router.get('/:postId', postsCtrl.getPostById);

// PUT /api/posts/:postId
router.put('/:postId', postsCtrl.updatePost);

module.exports = router;