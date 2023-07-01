const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// All paths start with '/api/posts'

// POST /api/posts/new
router.post('/new', postsCtrl.create);

module.exports = router;