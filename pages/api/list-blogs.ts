import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import { Blog, readBlog } from "@/lib/blogs";

const BLOG_DIR = "./blogs";

type Data = {
  blogs?: Blog[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let blogs: Blog[] = [];
  try {
    const files = await fs.readdir(BLOG_DIR);

    for (const file of files) {
      const blog = await readBlog(`${BLOG_DIR}/${file}`);

      if (blog instanceof Error) {
        console.error(`Failed to read blog ${file}: ${blog}`);
        return res.status(500).json({ error: "Failed to read a blog" });
      }

      blogs.push(blog);
    }
  } catch (err) {
    console.error(`Failed to list blogs: ${err}`);
    return res.status(500).json({ error: "Failed to list all blogs" });
  }

  console.log("Processing ", Date.now());
  res.status(200).json({ blogs: blogs });
}
