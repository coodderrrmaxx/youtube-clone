import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  thumbnailUrl: String,
  description: String,
  channelId: String,
  views: Number,
});

export default mongoose.model("Video", videoSchema);
