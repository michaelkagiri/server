import express from "express";
import { getBlogs, addBlog } from "../controller/controller.js";

const router = express.Router();

router.get("/blogs", getBlogs); // Get all blogs
router.post("/blogs", addBlog); // Add a blog

export {router};
