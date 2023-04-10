import H1 from "@/components/h1";
import { Blog, listBlogs } from "@/lib/blogs";
import Link from "next/link";

// Blog Props
interface BlogProps {
  blogs: Blog[];
}

export default function BlogListing({ blogs }: BlogProps) {
  for (const blog of blogs) {
    console.log(blog);
  }
  return (
    <>
      <H1>Blog</H1>
      <p>Subscribe to get emails whenever a new post goes out!</p>
      <form action="submit">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Subscribe</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.title}>
            <Link href={`/blog${blog.title}`}>{blog.title}</Link>
            <p>
              {blog.date} <span>{blog.readingTime} min read</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * Generate static props for the blog listing page
 * @returns {Blog[] | Error}
 */
export async function getStaticProps() {
  let blogs: Blog[] = [];

  try {
    const result = await listBlogs();
    if (result instanceof Error) {
      console.error(`static generation of blog props failed: ${result}`);
      throw result;
    }

    blogs = result;
  } catch (e) {
    console.error(
      `static generation of blog props threw unexpected error: ${e}`
    );
    throw e;
  }

  return {
    props: {
      blogs,
    },
  };
}
