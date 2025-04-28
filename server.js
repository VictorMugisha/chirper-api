import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import postRoutes from "./routes/post.routes.js";
import { seedDatabase } from "./utils/generatePost.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/posts/", postRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Function to create and insert fake data
// seedDatabase()