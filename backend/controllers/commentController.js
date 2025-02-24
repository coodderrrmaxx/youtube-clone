import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  try {
    const { videoId, userId, text } = req.body;
    const newComment = new Comment({ videoId, userId, text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};
