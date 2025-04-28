import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: {
    type: String,
    enum: ["photo", "video", "animated_gif"],
    required: true,
  },
  width: { type: Number },
  height: { type: Number },
  duration_ms: { type: Number }, // Only for videos
  alt_text: { type: String },
});

const postSchema = new mongoose.Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  media: [mediaSchema],
  quotedPostId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  likesCount: { type: Number, default: 0 },
  retweetsCount: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  hashtags: [{ type: String }],
  mentions: [{ type: String }],
  urls: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);
