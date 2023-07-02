const Post = require('../../models/post');

module.exports = {
  create,
};

async function create(req, res) {
    console.log(req.body); // Log the request payload
    const { category, title, content } = req.body;
    const { name, _id } = req.user;

    try {
      const newPost = await Post.create({ 
        category: category,
        title: title,
        content: content,
        user: { name, _id }
      });
      res.json(newPost);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating post' });
    }
}