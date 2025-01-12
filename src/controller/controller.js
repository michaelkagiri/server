import { blog } from "../database/model/blog.js";

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
};

// Add a new blog
export const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
   return res.status(500).json({ message: "Error adding blog" });
  }
};
