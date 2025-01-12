import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Image: { type: String, required:true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const blog = mongoose.model("Blog", blogSchema);
