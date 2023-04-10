import Blog from "@/pages/blog";
import fs from "fs/promises";

const WPM = 200;

/**
 * A fully parsed blog post object
 */
export type Blog = {
  path: string;
  title: string;
  date: string;
  readingTime: number;
  content: string;
};

/**
 * Read a single blog file from the file system
 * and parse it into a Blog object or Error
 * @param path Path to the blog
 */
type ReadBlog = Blog | Error;
export async function readBlog(path: string): Promise<ReadBlog> {
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
  const readingTime = getReadingTime(content);

  return {
    path: path,
    title: title,
    date: date,
    readingTime: readingTime,
    content: content,
  };
}

/**
 *
 * @param content the string content of the blog file
 * @returns number of minutes to read the blog
 */
function getReadingTime(content: string): number {
  const words = content.split(" ").length;
  return Math.ceil(words / WPM);
}
