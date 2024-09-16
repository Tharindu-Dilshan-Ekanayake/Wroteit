const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  try {
    const { title, content, author, tags, images, isDraft } = req.body;

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      content,
      author,
      tags: tags || [],
      images: images || [],
      isDraft: isDraft || false
    });

    // Save the blog post to the database
    const savedBlog = await newBlog.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: savedBlog
    });
  } catch (error) {
    // Handle any errors
    res.status(400).json({
      success: false,
      message: 'Failed to create blog post',
      error: error.message
    });
  }
};

module.exports = {
  createBlog
};