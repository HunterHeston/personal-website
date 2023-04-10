// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

const BLOG_DIR = "./blogs";

type Blog = {
  path: string;
  title: string;
  date: string;
  content: string;
};

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

/**
 * Read a single blog file from the file system
 * and parse it into a Blog object or Error
 * @param path Path to the blog
 */
type ReadBlog = Blog | Error;
async function readBlog(path: string): Promise<ReadBlog> {
  let content: string;
  try {
    content = await fs.readFile(path, "utf-8");
  } catch (err) {
    return new Error(`Failed to read blog at ${path}: ${err}`);
  }

  return parseBlogContent(path, content);
}

/**
 *
 * @param path Path to the blog
 * @param content the string content of the blog file
 * @returns parsed blog or error
 *
 * Assumed format:
 * Line 1: # Title
 * Line 2: (empty)
 * Line 3: `date`
 * Line 4 - n: markdown text content
 */
function parseBlogContent(path: string, content: string): Blog | Error {
  const lines = content.split("\n");
  if (lines.length < 3) {
    return new Error(`Invalid blog at ${path}: too few lines`);
  }

  const title = lines[0].replace(/^# /, "").trim();
  const date = lines[2].replaceAll("`", "").trim();

  return { path: path, title: title, date: date, content: content };
}
