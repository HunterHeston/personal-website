import type { NextApiRequest, NextApiResponse } from "next";
import { Blog, listBlogs } from "@/lib/blogs";

type Data = {
  blogs?: Blog[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let blogs: Blog[] | Error = [];
  try {
    const result = await listBlogs();
    if (result instanceof Error) {
      console.error(`Failed to list blogs: ${result}`);
      return res.status(500).json({ error: "Failed to list all blogs" });
    }
    blogs = result;
  } catch (err) {
    console.error(`Failed to list blogs: ${err}`);
    return res.status(500).json({ error: "Failed to list all blogs" });
  }

  console.log("Processing ", Date.now());
  res.status(200).json({ blogs: blogs });
}
