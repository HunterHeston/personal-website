import H1 from "@/components/h1";
import { Blog, listBlogs } from "@/lib/blogs";
import Link from "next/link";

// Blog Props
interface BlogProps {
  blogs: Blog[];
}

export default function BlogListing({ blogs }: BlogProps) {
  return (
    <>
      <H1>Blog</H1>
      <p className="mb-5">
        Sub and you&apos;ll get <span className="font-bold">one</span> email
        when I publish a new blog post.
      </p>
      <form className="flex mb-10" action="submit">
        <label htmlFor="email" hidden>
          Email
        </label>
        <input
          className="p-2 w-72 border-l border-t border-b rounded-l-md"
          placeholder="email"
          type="email"
          name="email"
          id="email"
        />
        <button
          className="p-3 text-primary bg-background rounded-r-md hover:bg-darker"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <BlogLi key={blog.title} {...blog} />
        ))}
      </ul>
    </>
  );
}

function BlogLi(blog: Blog) {
  return (
    <li className="flex flex-col" key={blog.title}>
      <Link className="text-xl" href={`/blog/${blog.slug}`}>
        {blog.title}
      </Link>
      <p className="text-primaryFaded">
        {blog.date}{" "}
        <span className="ml-3 italic">{blog.readingTime} min read</span>
      </p>
    </li>
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
