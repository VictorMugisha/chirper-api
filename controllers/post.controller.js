import Post from "../models/post.model.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    console.log("returning all posts: ", posts);
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve posts", error: err.message });
  }
}

export async function getSinglePost(req, res) {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve post", error: err.message });
  }
}
