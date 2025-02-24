import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoId: String,
  userId: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);
