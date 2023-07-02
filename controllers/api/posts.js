const Post = require('../../models/post');

module.exports = {
  create,
  getPostById,
};

async function create(req, res) {
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

      console.log(newPost);


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating post' });
    }
}

async function getPostById(req, res) {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId).populate('user').exec();

        // if there is no post with that id
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);

        console.log(post);

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving post' });
    }

}