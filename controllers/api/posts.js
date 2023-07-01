const Post = require('../../models/post');

module.exports = {
  create,
};

async function create(req, res) {
    const { category, title, content, user } = req.body;
    try {
        const newPost = await Post.create({
            category,
            title,
            content,
            user
        });

        const savedPost = await newPost.save();
        res.json(savedPost);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a new post' });

    }

    // const post = await Post.create({ text: req.body.text })
    // res.json(post)
}