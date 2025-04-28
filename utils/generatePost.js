import faker from "@faker-js/faker";

import Post from "../models/post.model";

async function generatePost() {
  const post = new Post({
    username: faker.internet.userName(),
    content: faker.lorem.sentence(),
    media: [
      {
        url: faker.image.imageUrl(),
        type: "photo",
        width: 800,
        height: 600,
      },
    ],
    hashtags: [faker.lorem.word()],
    mentions: [faker.internet.userName()],
    urls: [faker.internet.url()],
  });

  await post.save();
  console.log("Generated post:", post);
}

generatePost();
