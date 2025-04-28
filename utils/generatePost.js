import { faker } from "@faker-js/faker";

import Post from "../models/post.model.js";

const generateFakePosts = async (numPosts = 10) => {
  for (let i = 0; i < numPosts; i++) {
    const post = new Post({
      username: faker.internet.username(),
      content: faker.lorem.sentence(),
      media: [
        {
          url: "https://picsum.photos/",
          type: "photo",
          width: 800,
          height: 600,
        },
      ],
      hashtags: [faker.lorem.word()],
      mentions: [faker.internet.username()],
      urls: [faker.internet.url()],
    });

    //     await post.save();
    console.log(`Generated post #${i + 1}`);
  }
};

// Seed the database
export async function seedDatabase() {
  await generateFakePosts(10); // Generate 10 fake posts
  mongoose.connection.close();
}
